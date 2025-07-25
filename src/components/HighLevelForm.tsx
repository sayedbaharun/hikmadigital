import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const HighLevelForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // HighLevel form endpoint
      const response = await fetch('https://api.leadconnectorhq.com/widget/form/cwdCjTwRnblhhIdPVLww', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Hikma Digital Website',
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        toast.success("Thank you! We'll be in touch within 2 hours.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast.error("There was an error submitting your form. Please try again or contact us directly.");
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-2xl font-bold mb-6 text-center">Get Your Free AI Assessment</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number *
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+971-XX-XXX-XXXX"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company Name
            </label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Tell us about your AI needs
          </label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your business challenges and how AI might help..."
          />
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          variant="gold" 
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Get Free AI Assessment"}
        </Button>

        <p className="text-sm text-muted-foreground text-center mt-4">
          🔒 Your information is secure and will never be shared. We typically respond within 2 hours.
        </p>
      </form>
    </div>
  );
};

export default HighLevelForm;