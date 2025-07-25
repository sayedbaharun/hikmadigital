import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: January 2025</p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using Hikma Digital's services, you accept and agree to be bound by 
              the terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
            <p className="mb-4">
              Hikma Digital provides AI consulting, implementation, and automation services. Our services include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI strategy consulting and roadmap development</li>
              <li>Custom AI solution development and implementation</li>
              <li>Business process automation</li>
              <li>AI training and support services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with the security or proper functioning of our services</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services are owned by Hikma Digital 
              and are protected by international copyright, trademark, patent, trade secret, and 
              other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
            <p className="mb-4">
              Payment terms will be specified in individual service agreements. Generally:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payments are due within 30 days of invoice date</li>
              <li>Late payments may incur additional charges</li>
              <li>All fees are non-refundable unless otherwise stated</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p>
              Hikma Digital shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
              or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
            <p>
              We may terminate or suspend your access immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
            <p>
              These Terms shall be interpreted and governed by the laws of the United Arab Emirates. 
              Any disputes shall be subject to the exclusive jurisdiction of the courts of Dubai.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
              <br />
              Email: legal@hikmadigital.com
              <br />
              Phone: +971 50 123 4567
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;