import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { runAllTests, testResponsiveness, testAnimations, testAccessibility, testKeyboardNavigation } from '@/utils/responsiveTest';
import { Monitor, Smartphone, Tablet, Zap, Eye, Keyboard } from 'lucide-react';

const DevTestPanel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [testResults, setTestResults] = useState<string[]>([]);

  const runTest = (testFn: () => void, testName: string) => {
    console.clear();
    testFn();
    setTestResults(prev => [...prev, `${testName} completed - check console for details`]);
  };

  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isVisible ? (
        <Button
          onClick={() => setIsVisible(true)}
          variant="outline"
          size="sm"
          className="bg-background shadow-lg"
        >
          🧪 Dev Tests
        </Button>
      ) : (
        <Card className="w-80 max-h-96 overflow-y-auto bg-background shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Development Tests</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsVisible(false)}
                className="h-6 w-6 p-0"
              >
                ×
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => runTest(testResponsiveness, 'Mobile Responsiveness')}
                className="text-xs"
              >
                <Smartphone className="mr-1 h-3 w-3" />
                Mobile
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => runTest(testAnimations, 'Animations')}
                className="text-xs"
              >
                <Zap className="mr-1 h-3 w-3" />
                Animations
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => runTest(testAccessibility, 'Accessibility')}
                className="text-xs"
              >
                <Eye className="mr-1 h-3 w-3" />
                A11y
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => runTest(testKeyboardNavigation, 'Keyboard Nav')}
                className="text-xs"
              >
                <Keyboard className="mr-1 h-3 w-3" />
                Keyboard
              </Button>
            </div>
            
            <Button
              variant="gold"
              size="sm"
              onClick={() => runTest(runAllTests, 'All Tests')}
              className="w-full text-xs"
            >
              <Monitor className="mr-1 h-3 w-3" />
              Run All Tests
            </Button>
            
            <div className="mt-4">
              <h4 className="text-xs font-semibold mb-2">Test Results:</h4>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {testResults.length === 0 ? (
                  <p className="text-xs text-muted-foreground">No tests run yet</p>
                ) : (
                  testResults.slice(-5).map((result, index) => (
                    <Badge key={index} variant="secondary" className="text-xs w-full justify-start">
                      ✅ {result}
                    </Badge>
                  ))
                )}
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTestResults([])}
              className="w-full text-xs"
            >
              Clear Results
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DevTestPanel;