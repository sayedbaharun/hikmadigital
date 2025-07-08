import { SimpleHero } from "@/components/ui/simple-hero";

function DemoSimpleHero() {
    const handleStartClick = () => {
        // In a real app, this would open contact form or navigate
        console.log('Start Now clicked');
    };

    return (
        <SimpleHero 
            badge="Hikma Digital"
            title="AI for Dubai Business"
            subtitle="Transform operations in 30 days"
            description="Trusted by 500+ Dubai companies"
            onStartClick={handleStartClick}
        />
    );
}

// Alternative configurations following our design philosophy
function DemoMinimalHero() {
    return (
        <SimpleHero 
            title="Transform Business with AI"
            subtitle="Start Now"
            onStartClick={() => console.log('Minimal demo clicked')}
        />
    );
}

function DemoArabicHero() {
    return (
        <SimpleHero 
            badge="حكمة ديجيتال"
            title="ذكاء اصطناعي للأعمال في دبي" 
            subtitle="تحويل العمليات في 30 يوماً"
            description="موثوق من قبل أكثر من 500 شركة في دبي"
            onStartClick={() => console.log('Arabic demo clicked')}
        />
    );
}

export { DemoSimpleHero, DemoMinimalHero, DemoArabicHero };