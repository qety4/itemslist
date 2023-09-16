import prisma from "@/libs/prisma/client"

const Posts= [
    {
        title: "Jet-Powered Roller Skates",
        description: "Skate on clouds, leave a trail of smoke, and terrify your neighbors – all at once!",
        mainCategory: "items",
        category: "transport",
        email: "jetroller@example.com"
      },
      {
        title: "Self-Driving Shopping Cart",
        description: "Experience the thrill of being chauffeured by a cart with a mind of its own.",
        mainCategory: "items",
        category: "other",
        email: "autocart@example.com"
      },
      {
        title: "Inflatable Tuxedo",
        description: "Look formal at the push of a button. Perfect for unexpected black-tie pool parties.",
        mainCategory: "items",
        category: "clothes",
        email: "inflatabletux@example.com"
      },
      {
        title: "Keyboard with a Sense of Humor",
        description: "This keyboard laughs when you press the 'LOL' key. Typing just got funnier!",
        mainCategory: "items",
        category: "computers/etc",
        email: "funnykeyboard@example.com"
      },
      {
          title: "Professional Sleep Tester",
          description: "Hire us to take your nap game to the next level. We even dream in HD!",
          mainCategory: "services",
          category: "labor",
          email: "sleeptester@example.com"
        },
        {
            title: "Clumsy Event Planners",
            description: "We specialize in organizing surprise parties where we surprise ourselves first.",
            mainCategory: "services",
            category: "event",
            email: "clumsyplanner@example.com"
        },
        {
            title: "Rocket-Powered Skateboard",
            description: "Get to work at the speed of light or crash trying. Safety gear not included!",
            mainCategory: "items",
            category: "transport",
            email: "rocketrider@example.com"
        },
        {
          title: "Socks with a Built-In Fan",
          description: "Say goodbye to sweaty feet with these socks that provide a constant breeze.",
          mainCategory: "items",
          category: "clothes",
          email: "coolsocks@example.com"
        },
        {
        title: "Invisible Wardrobe",
        description: "Wear this and become the talk of the town, even though no one can see you!",
        mainCategory: "items",
        category: "clothes",
        email: "invisiblefashionista@example.com"
      },
      {
        title: "Squeaky Rubber Chicken",
        description: "The perfect companion for awkward silences. Squeak it for instant hilarity!",
        mainCategory: "items",
        category: "other",
        email: "squeakylaughs@example.com"
      },
      {
        title: "Car Horn Symphony",
        description: "We'll customize your car horn to play your favorite tunes. Beethoven in traffic!",
        mainCategory: "services",
        category: "automotive",
        email: "hornmaestro@example.com"
      },
      {
        title: "Reverse Driving Lessons",
        description: "Learn how to drive backward like a pro. No need for rearview mirrors!",
        mainCategory: "services",
        category: "automotive",
        email: "reversemaster@example.com"
      },
    
      // Computers/Etc Items
      {
        title: "USB Toaster",
        description: "Now you can print your toast directly from your computer. Edible error messages!",
        mainCategory: "items",
        category: "computers/etc",
        email: "usbtoast@example.com"
      },
      {
        title: "The Ultimate Paperweight",
        description: "This paperweight is so heavy, it will hold down your digital documents too!",
        mainCategory: "items",
        category: "computers/etc",
        email: "heavydoc@example.com"
      },
      {
        title: "Wearable Banana Peel",
        description: "Slip into style with this fashionable banana peel suit. Caution: May attract monkeys.",
        mainCategory: "items",
        category: "other",
        email: "bananachic@example.com"
      },
      {
        title: "Pet Rock Spa",
        description: "Treat your pet rock to a relaxing spa day. They deserve the best!",
        mainCategory: "items",
        category: "other",
        email: "rockspa@example.com"
      },
      {
        title: "Professional Lawn Flamingo Installer",
        description: "Add a touch of absurdity to your yard with our expertly arranged flock of lawn flamingos.",
        mainCategory: "services",
        category: "labor",
        email: "flamingoartist@example.com"
      },
      {
        title: "Clown History Lessons",
        description: "Explore history with a twist as clowns reenact epic events. Expect balloon battles!",
        mainCategory: "services",
        category: "education",
        email: "clownhistorian@example.com"
      },
      {
        title: "Inflatable Brick",
        description: "For those who want the aesthetics of a brick wall without the weight. Ideal for pranks!",
        mainCategory: "items",
        category: "other",
        email: "brickprankster@example.com"
      },
      {
        title: "Pet Rock Spa & Wellness Retreat",
        description: "Indulge your pet rock in yoga, meditation, and hot stone massages. Zen rocks only.",
        mainCategory: "items",
        category: "other",
        email: "rockspa@example.com"
      },
      {
        title: "Glow-in-the-Dark Tuxedo",
        description: "Light up the night with this dazzling tuxedo. Perfect for disco-themed weddings!",
        mainCategory: "items",
        category: "clothes",
        email: "glowtux@example.com"
      },
      {
        title: "Socks with Wi-Fi",
        description: "Stay connected while keeping your feet warm. Surf the web, one step at a time.",
        mainCategory: "items",
        category: "clothes",
        email: "wifisocks@example.com"
      },
      {
        title: "Rocket-Powered Shopping Cart",
        description: "Zoom through the aisles in record time. Cart retrieval not included!",
        mainCategory: "items",
        category: "transport",
        email: "rocketshopper@example.com"
      },
      {
        title: "Convertible Bicycles for Fish",
        description: "Give your pet fish the open-road experience they've always dreamed of.",
        mainCategory: "items",
        category: "transport",
        email: "fishrider@example.com"
      },
      {
        title: "Portable Hole USB Drive",
        description: "Store your data in a pocket dimension. Just don't lose your pants!",
        mainCategory: "items",
        category: "computers/etc",
        email: "pockethole@example.com"
      },
      {
        title: "Keyboard with Cat Paw Print Keys",
        description: "Now you can type in style, with each key featuring a cute cat paw print.",
        mainCategory: "items",
        category: "computers/etc",
        email: "catkeyboard@example.com"
      },
      {
        title: "Silent Car Alarm Installation",
        description: "Our alarms are so discreet, even your car won't know it's being robbed.",
        mainCategory: "services",
        category: "automotive",
        email: "stealthalarm@example.com"
      },
      {
        title: "Car Tire Fortune Telling",
        description: "Get your car's future predicted by our tire-reading experts. Will it pass inspection?",
        mainCategory: "services",
        category: "automotive",
        email: "tireseer@example.com"
      },
      {
        title: "Professional Balloon Animal Artist",
        description: "We create balloon animals so lifelike, you'll wonder if they're real!",
        mainCategory: "services",
        category: "event",
        email: "balloonpicasso@example.com"
      },
      {
        title: "Extreme Pillow Fighting Championships",
        description: "Join us for the most epic pillow fights you've ever witnessed. Featherweight champions wanted!",
        mainCategory: "services",
        category: "event",
        email: "pillowwarrior@example.com"
      },
      {
        title: "Online Quantum Physics Tutoring",
        description: "We promise to make quantum physics as clear as a cat chasing a laser pointer.",
        mainCategory: "services",
        category: "education",
        email: "quantumcomedian@example.com"
      },
      {
        title: "Naptime Enthusiasts Club",
        description: "Join our club where we study the art of napping professionally. No coffee allowed!",
        mainCategory: "services",
        category: "education",
        email: "napmaster@example.com"
      },
      {
        title: "Professional Dog Walker for Cats",
        description: "Because cats secretly want to explore the great outdoors, too. Leash-trained cats only!",
        mainCategory: "services",
        category: "labor",
        email: "catdogwalker@example.com"
      },
      {
        title: "Master of Accidental Comedy",
        description: "Hire us for events, and we'll make sure everything that can go wrong, does – hilariously!",
        mainCategory: "services",
        category: "labor",
        email: "accidentalcomedian@example.com"
      },
      {
        title: "Professional Mime Hypnotists",
        description: "Watch as our mimes hypnotize you into believing they're not really there. Mind-blowing!",
        mainCategory: "services",
        category: "event",
        email: "mimehypnotist@example.com"
      },
      {
        title: "Catering by Clumsy Chefs",
        description: "We specialize in food that ends up in unexpected places. Surprise guests guaranteed!",
        mainCategory: "services",
        category: "event",
        email: "clumsychef@example.com"
      },
      {
        title: "Car Exhaust Harmonica Upgrade",
        description: "Turn your car's exhaust into a musical instrument. Serenade other drivers on the freeway!",
        mainCategory: "services",
        category: "automotive",
        email: "carharmonica@example.com"
      },
      {
        title: "Custom Horn Honk Compositions",
        description: "We compose personalized horn honk symphonies for special occasions. Beep in style!",
        mainCategory: "services",
        category: "automotive",
        email: "honksymphony@example.com"
      },
      {
        title: "Keyboard with Emoji Keys",
        description: "Express yourself through keystrokes with this emoji-packed keyboard. 😂💻",
        mainCategory: "items",
        category: "computers/etc",
        email: "emojiboard@example.com"
      },
      {
        title: "Laptop-Sized Cheese Grater",
        description: "Upgrade your computer with a cheese grater – for all your cheesy computing needs!",
        mainCategory: "items",
        category: "computers/etc",
        email: "cheeselaptop@example.com"
      },
      {
        title: "Advanced Chalkboard Art Lessons",
        description: "Unlock the secrets of drawing stick figures and smiley faces with unparalleled detail.",
        mainCategory: "services",
        category: "education",
        email: "chalkboardartist@example.com"
      },
      {
        title: "Time Travel Homework Assistance",
        description: "Get help with your history assignments from people who were there. Sort of.",
        mainCategory: "services",
        category: "education",
        email: "timetraveltutor@example.com"
      },
      {
        title: "Professional Bubble Wrap Popper",
        description: "Need stress relief? Hire us to pop bubble wrap professionally. Satisfaction guaranteed!",
        mainCategory: "services",
        category: "labor",
        email: "bubblewrappro@example.com"
      },
      {
        title: "Invisible Fence Painters",
        description: "We'll paint invisible fences to keep those pesky invisible creatures at bay.",
        mainCategory: "services",
        category: "labor",
        email: "invisiblepainter@example.com"
      },
      {
        title: "Pirate Themed Weddings",
        description: "Arr matey! Celebrate your big day with a swashbuckling pirate-themed wedding.",
        mainCategory: "services",
        category: "event",
        email: "pirateweddings@example.com"
      },
      {
        title: "Clown Hypnotist Magicians",
        description: "Watch as clowns hypnotize themselves into thinking they're world-class magicians.",
        mainCategory: "services",
        category: "event",
        email: "clownmagician@example.com"
      },
      {
        title: "Car Horn Orchestra",
        description: "Join our orchestra of car horns to perform symphonies during rush hour traffic.",
        mainCategory: "services",
        category: "automotive",
        email: "carhornmaestro@example.com"
      },
      {
        title: "Parallel Universe Parking Service",
        description: "We'll find parking spots in parallel universes. Just make sure you bring your alternate self!",
        mainCategory: "services",
        category: "automotive",
        email: "parallelparking@example.com"
      },
      {
        title: "Mousepad with Cat Paw Mouse",
        description: "Navigate your computer with a mouse that's shaped like a cat's paw. Purrfect!",
        mainCategory: "items",
        category: "computers/etc",
        email: "catmouse@example.com"
      },
      {
        title: "USB Pet Rock Charger",
        description: "Charge your pet rock with this USB-powered charger. Keep them energized!",
        mainCategory: "items",
        category: "computers/etc",
        email: "rockcharger@example.com"
      },
]
export async function POST(){
    Posts.map(async (item)=>{
        await prisma.post.create({
            data:{
                ...item
            }
        })
    })
}