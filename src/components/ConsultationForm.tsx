import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Phone, Brain, X } from "lucide-react";
import { toast } from "sonner";

interface ConsultationFormProps {
  type: "consultation" | "assessment" | "discovery";
  trigger?: React.ReactNode;
}

const formConfig = {
  consultation: {
    title: "Book Free Consultation",
    description: "Get personalized AI recommendations for your business",
    icon: Calendar,
    submitText: "Book Consultation"
  },
  assessment: {
    title: "Get AI Assessment", 
    description: "Discover your AI transformation potential",
    icon: Brain,
    submitText: "Start Assessment"
  },
  discovery: {
    title: "Schedule Discovery Call",
    description: "Explore AI opportunities with our experts",
    icon: Phone,
    submitText: "Schedule Call"
  }
};

const countryCodes = [
  { code: "+971", country: "UAE" },
  { code: "+1", country: "US" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "India" },
  { code: "+33", country: "France" },
  { code: "+49", country: "Germany" },
  { code: "+86", country: "China" },
  { code: "+81", country: "Japan" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+974", country: "Qatar" },
  { code: "+965", country: "Kuwait" },
  { code: "+973", country: "Bahrain" }
];

const ConsultationForm = ({ type, trigger }: ConsultationFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+971",
    phone: "",
    company: "",
    message: ""
  });

  const config = formConfig[type];
  const Icon = config.icon;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsLoading(true);

    try {
      // Submit to LeadConnector API
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', `${formData.countryCode}${formData.phone}`);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('message', `${formData.message}\n\nForm Type: ${config.title}`);

      const response = await fetch('https://api.leadconnectorhq.com/widget/form/cwdCjTwRnblhhIdPVLww', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }
      
      toast.success(`${config.title} request submitted successfully! We'll contact you within 2 hours.`);
      setIsOpen(false);
      setFormData({
        name: "",
        email: "",
        countryCode: "+971",
        phone: "",
        company: "",
        message: ""
      });
    } catch (error) {
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const defaultTrigger = (
    <Button variant="gold" size="lg" className="min-w-[200px]">
      <Icon className="mr-2 h-5 w-5" />
      {config.title}
    </Button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Icon className="h-6 w-6 text-primary" />
            {config.title}
          </DialogTitle>
          <p className="text-muted-foreground">
            {config.description}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <div className="flex gap-2">
              <Select
                value={formData.countryCode}
                onValueChange={(value) => setFormData({ ...formData, countryCode: value })}
              >
                <SelectTrigger className="w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countryCodes.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.code} {country.country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                id="phone"
                type="tel"
                placeholder="50 123 4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="flex-1"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              type="text"
              placeholder="Your Company (Optional)"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Tell us about your business</Label>
            <Textarea
              id="message"
              placeholder="What challenges are you facing? What are your AI goals?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="gold"
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? "Submitting..." : config.submitText}
            </Button>
          </div>
        </form>

        <div className="border-t pt-4 mt-6">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">🔒 Your information is secure and confidential</p>
            <p>📞 We'll contact you within 2 hours during business hours</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationForm;