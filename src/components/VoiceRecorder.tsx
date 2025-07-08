import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff, Play, Pause, Download, Trash2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface VoiceRecorderProps {
  onRecordingComplete?: (audioBlob: Blob, transcript?: string) => void;
  maxDuration?: number; // in seconds
  className?: string;
}

const VoiceRecorder: React.FC<VoiceRecorderProps> = ({
  onRecordingComplete,
  maxDuration = 60,
  className = ''
}) => {
  const { language, isRTL } = useLanguage();
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [transcript, setTranscript] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100
        }
      });

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus'
      });

      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setAudioBlob(blob);
        
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        
        // Process audio for transcription
        await processAudio(blob);
        
        // Stop all tracks
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start(100); // Collect data every 100ms
      setIsRecording(true);
      setDuration(0);

      // Start timer
      timerRef.current = setInterval(() => {
        setDuration(prev => {
          const newDuration = prev + 1;
          if (newDuration >= maxDuration) {
            stopRecording();
          }
          return newDuration;
        });
      }, 1000);

    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert(language === 'ar' 
        ? 'لا يمكن الوصول إلى الميكروفون. يرجى التحقق من الأذونات.'
        : 'Cannot access microphone. Please check permissions.'
      );
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      if (isPaused) {
        mediaRecorderRef.current.resume();
        setIsPaused(false);
        
        // Resume timer
        timerRef.current = setInterval(() => {
          setDuration(prev => {
            const newDuration = prev + 1;
            if (newDuration >= maxDuration) {
              stopRecording();
            }
            return newDuration;
          });
        }, 1000);
      } else {
        mediaRecorderRef.current.pause();
        setIsPaused(true);
        
        // Pause timer
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
      }
    }
  };

  const processAudio = async (blob: Blob) => {
    setIsProcessing(true);
    
    try {
      // Simulate audio processing and transcription
      // In a real implementation, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock transcription based on language
      const mockTranscript = language === 'ar' 
        ? 'مرحباً، أريد معرفة المزيد عن خدمات الذكاء الاصطناعي لمطعمي.'
        : 'Hello, I want to learn more about AI services for my restaurant.';
      
      setTranscript(mockTranscript);
      
      if (onRecordingComplete) {
        onRecordingComplete(blob, mockTranscript);
      }
    } catch (error) {
      console.error('Error processing audio:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const playAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const deleteRecording = () => {
    setAudioBlob(null);
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
      setAudioUrl(null);
    }
    setTranscript('');
    setDuration(0);
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const downloadRecording = () => {
    if (audioBlob) {
      const url = URL.createObjectURL(audioBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `voice-message-${Date.now()}.webm`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`glass-card p-6 ${className}`}>
      <div className="text-center mb-6">
        <h3 className={`text-lg font-medium text-white mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
          {language === 'ar' ? 'مسجل الصوت' : 'Voice Recorder'}
        </h3>
        <p className={`text-sm text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
          {language === 'ar' 
            ? 'اضغط للتسجيل بالعربية أو الإنجليزية'
            : 'Press to record in Arabic or English'
          }
        </p>
      </div>

      {/* Recording Controls */}
      <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse mb-6">
        {!audioBlob ? (
          <>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={isRecording ? stopRecording : startRecording}
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                isRecording 
                  ? 'bg-red-600 hover:bg-red-700 animate-pulse' 
                  : 'bg-primary-600 hover:bg-primary-700'
              }`}
            >
              {isRecording ? (
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              ) : (
                <Mic className="w-8 h-8 text-white" />
              )}
            </motion.button>

            {isRecording && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={pauseRecording}
                className="w-12 h-12 rounded-full bg-yellow-600 hover:bg-yellow-700 flex items-center justify-center transition-all duration-300"
              >
                {isPaused ? (
                  <Play className="w-6 h-6 text-white" />
                ) : (
                  <Pause className="w-6 h-6 text-white" />
                )}
              </motion.button>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={playAudio}
              className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center transition-all duration-300"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 text-white" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={downloadRecording}
              className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all duration-300"
            >
              <Download className="w-6 h-6 text-white" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={deleteRecording}
              className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-all duration-300"
            >
              <Trash2 className="w-6 h-6 text-white" />
            </motion.button>
          </div>
        )}
      </div>

      {/* Recording Status */}
      <div className="text-center mb-4">
        {isRecording && (
          <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className={`text-red-400 font-medium ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {isPaused 
                ? (language === 'ar' ? 'متوقف مؤقتاً' : 'Paused')
                : (language === 'ar' ? 'جاري التسجيل...' : 'Recording...')
              }
            </span>
          </div>
        )}
        
        <div className={`text-2xl font-mono text-white ${duration > maxDuration * 0.8 ? 'text-red-400' : ''}`}>
          {formatTime(duration)}
        </div>
        
        {maxDuration && (
          <div className="text-sm text-gray-400">
            {language === 'ar' ? 'الحد الأقصى:' : 'Max:'} {formatTime(maxDuration)}
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {maxDuration && (
        <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${
              duration > maxDuration * 0.8 ? 'bg-red-500' : 'bg-primary-500'
            }`}
            style={{ width: `${Math.min((duration / maxDuration) * 100, 100)}%` }}
          ></div>
        </div>
      )}

      {/* Audio Element */}
      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          onLoadedMetadata={() => {
            if (audioRef.current) {
              setCurrentTime(audioRef.current.duration);
            }
          }}
          onTimeUpdate={() => {
            if (audioRef.current) {
              setCurrentTime(audioRef.current.currentTime);
            }
          }}
          onEnded={() => setIsPlaying(false)}
          className="hidden"
        />
      )}

      {/* Transcript */}
      {isProcessing && (
        <div className="text-center py-4">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-4 h-4 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
            <span className={`text-primary-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'جاري معالجة الصوت...' : 'Processing audio...'}
            </span>
          </div>
        </div>
      )}

      {transcript && (
        <div className="mt-4 p-4 bg-white/5 rounded-lg">
          <h4 className={`text-sm font-medium text-white mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'النص المكتوب:' : 'Transcript:'}
          </h4>
          <p className={`text-gray-300 ${isRTL ? 'font-arabic' : 'font-inter'}`} dir="auto">
            {transcript}
          </p>
        </div>
      )}

      {/* Language Detection */}
      {transcript && (
        <div className="mt-2 text-center">
          <span className={`text-xs text-gray-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {language === 'ar' ? 'تم اكتشاف:' : 'Detected:'} {
              /[\u0600-\u06FF]/.test(transcript) ? 'العربية' : 'English'
            }
          </span>
        </div>
      )}
    </div>
  );
};

export default VoiceRecorder;