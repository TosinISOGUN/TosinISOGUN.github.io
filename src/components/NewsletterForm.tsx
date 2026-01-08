import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Successfully subscribed!",
      description: "You'll receive our latest insights directly in your inbox.",
    });

    setEmail('');
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-background/50 border-border focus:border-primary"
      />
      <Button 
        type="submit" 
        disabled={isLoading}
        className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap"
      >
        {isLoading ? (
          'Subscribing...'
        ) : (
          <>
            Subscribe
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
};
