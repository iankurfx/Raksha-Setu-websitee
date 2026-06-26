import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Reviews() {
  const reviews = [
    { name: "Priya Sharma", initial: "P", text: "The volume button trigger is brilliant. I feel much safer walking home at night knowing I don't even have to look at my phone to send an SOS." },
    { name: "Rahul Verma", initial: "R", text: "Finally an emergency app that doesn't track my location 24/7. The privacy-first approach is exactly what I was looking for." },
    { name: "Anjali Desai", initial: "A", text: "The fake call feature has saved me from so many uncomfortable situations. It looks incredibly realistic." },
    { name: "Vikram Singh", initial: "V", text: "Testing it without internet proved that it actually works offline. My parents got the SMS alert instantly. Highly recommended." },
    { name: "Neha Patel", initial: "N", text: "Beautiful, clean interface. It's not cluttered like other safety apps. Just does one thing and does it perfectly." },
    { name: "Arjun Reddy", initial: "A", text: "The battery optimization is real. I keep it running in the background and haven't noticed any battery drain." },
    { name: "Kavya Iyer", initial: "K", text: "Voice trigger is a game changer. Set it up with a custom phrase and it worked flawlessly during testing." },
    { name: "Rohan Kapoor", initial: "R", text: "Set this up for my sister. The live location tracking during an active SOS is very accurate and reassuring." },
  ];

  const firstRow = reviews.slice(0, 4);
  const secondRow = reviews.slice(4, 8);

  const ReviewCard = ({ review }: { review: any }) => (
    <div className="flex-none w-[350px] p-6 rounded-2xl bg-card border border-white/5 shadow-lg mr-6">
      <div className="flex items-center gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-white/80 mb-6 leading-relaxed">"{review.text}"</p>
      <div className="flex items-center gap-3 mt-auto">
        <Avatar className="h-10 w-10 border border-white/10">
          <AvatarFallback className="bg-primary/20 text-primary font-semibold">{review.initial}</AvatarFallback>
        </Avatar>
        <div className="text-sm font-medium text-white">{review.name}</div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
          Trusted By Many
        </h2>
      </div>

      <div className="relative flex flex-col gap-6">
        {/* Left/Right Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1 */}
        <div className="flex w-fit animate-[marquee_40s_linear_infinite]">
          {[...firstRow, ...firstRow].map((review, i) => (
            <ReviewCard key={`r1-${i}`} review={review} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex w-fit animate-[marquee-reverse_45s_linear_infinite] ml-[-200px]">
          {[...secondRow, ...secondRow].map((review, i) => (
            <ReviewCard key={`r2-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}