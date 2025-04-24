import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import "./review.css"

const reviews = [
  {
    name: "Tina M.",
    flavor: "Jalapeño Banana Bread",
    rating: 5,
    content:
      "Spicy AND sweet? I was skeptical but it absolutely worked. Unexpectedly addictive!",
  },
  {
    name: "Jake R.",
    flavor: "Chocolate Banana Bread",
    rating: 5,
    content:
      "This should be illegal. So fudgy, rich, and still somehow fluffy? Unreal.",
  },
  {
    name: "Elena V.",
    flavor: "Mango Coconut (Test Flavor)",
    rating: 4,
    content:
      "Loved the tropical twist — it felt like vacation in a loaf. Try it if you’re feeling bold!",
  },
  {
    name: "Matt C.",
    flavor: "Classic Banana Bread",
    rating: 5,
    content:
      "Just like grandma's but better. Moist, flavorful, and doesn't break the bank.",
  },
  {
    name: "Nina L.",
    flavor: "Peanut Butter Banana Bread",
    rating: 5,
    content:
      "Perfect combo of nutty and sweet. Ate three slices without blinking.",
  },
]

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((index + 1) % reviews.length)
  const prev = () => setIndex((index - 1 + reviews.length) % reviews.length)

  const { name, flavor, rating, content } = reviews[index]

  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">What Our Fans Are Saying 🍌</h2>

      <div className="testimonial-container">
        <div className="testimonial-stars">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400" />
          ))}
        </div>
        <p className="testimonial-text">"{content}"</p>
        <p className="testimonial-author">
          — {name} | <span className="testimonial-flavor">{flavor}</span>
        </p>
        <div className="absolute inset-y-0 left-0 flex items-center pl-4">
          <button onClick={prev} className="carousel-button button-left">
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          <button onClick={next} className="carousel-button button-right">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
