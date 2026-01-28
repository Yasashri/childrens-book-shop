import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Search, Star, Heart, BookOpen, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Youtube, ArrowRight, Sparkles, Gift, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

// Navigation Component
function Navigation({ currentPage, setCurrentPage, cartCount }: { currentPage: string; setCurrentPage: (page: string) => void; cartCount: number }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'shop', label: 'Shop Books', icon: '📚' },
    { id: 'about', label: 'About Us', icon: '⭐' },
    { id: 'contact', label: 'Contact', icon: '💌' },
  ];

  return (
    <nav className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-fun py-2' : 'bg-transparent py-4'}`} style={{width: 'min(1320px, 100% - 2.5rem)'}}>
      <div className="px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 group"
          >
            <div className="flex items-center justify-center w-12 h-12 transition-all duration-300 gradient-sunny rounded-2xl shadow-card group-hover:shadow-card-hover group-hover:rotate-6">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="hidden text-2xl text-gray-800 font-fredoka sm:block">
              Tiny<span className="text-orange-500">Tales</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-2 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                  currentPage === item.id 
                    ? 'gradient-sunny text-white shadow-card' 
                    : 'text-gray-700 hover:bg-sunny/20'
                }`}
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center w-10 h-10 text-gray-600 transition-all duration-300 bg-white rounded-full shadow-fun hover:bg-sunny hover:text-white">
              <Search className="w-5 h-5" />
            </button>
            <Sheet>
              <SheetTrigger asChild>
                <button className="relative flex items-center justify-center w-10 h-10 text-gray-600 transition-all duration-300 bg-white rounded-full shadow-fun hover:bg-coral hover:text-white">
                  <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white rounded-full -top-1 -right-1 bg-coral">
                      {cartCount}
                    </span>
                  )}
                </button>
              </SheetTrigger>
              <SheetContent className="border-l-4 bg-gradient-to-b from-yellow-50 to-orange-50 border-sunny">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2 text-2xl font-fredoka">
                    <ShoppingCart className="w-6 h-6 text-orange-500" />
                    Your Cart
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 text-center">
                  <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 bg-white rounded-full shadow-fun">
                    <ShoppingCart className="w-12 h-12 text-gray-300" />
                  </div>
                  <p className="font-medium text-gray-500">Your cart is empty!</p>
                  <p className="mt-1 text-sm text-gray-400">Add some magical books ✨</p>
                  <Button 
                    onClick={() => setCurrentPage('shop')}
                    className="px-6 mt-6 text-white rounded-full gradient-sunny"
                  >
                    Browse Books
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center w-10 h-10 text-gray-600 bg-white rounded-full md:hidden shadow-fun"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="p-4 mt-4 bg-white md:hidden rounded-3xl shadow-fun-lg animate-slide-up">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full px-5 py-3 rounded-2xl font-bold text-left transition-all duration-300 flex items-center gap-3 mb-2 ${
                  currentPage === item.id 
                    ? 'gradient-sunny text-white' 
                    : 'text-gray-700 hover:bg-sunny/20'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <section className="relative flex items-center min-h-screen pt-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute w-32 h-32 top-20 left-10 bg-sunny/30 blob-shape animate-float" />
      <div className="absolute w-24 h-24 top-40 right-20 bg-coral/30 blob-shape-2 animate-float-delayed" />
      <div className="absolute w-20 h-20 bottom-40 left-1/4 bg-sky/30 blob-shape-3 animate-float" />
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-mint/30 blob-shape animate-float-delayed" />
      
      <div className="relative z-10 px-4 mx-auto" style={{width: 'min(1320px, 100% - 2.5rem)'}}>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/80 backdrop-blur-sm shadow-fun animate-slide-in-left">
              <Sparkles className="w-5 h-5 text-sunny" />
              <span className="text-sm font-bold text-gray-700">Discover Magical Stories!</span>
            </div>
            
            <h1 className="mb-6 text-5xl leading-tight text-gray-800 font-fredoka md:text-6xl lg:text-7xl">
              Where Every <br />
              <span className="text-transparent bg-clip-text gradient-rainbow bg-gradient-to-r from-sunny via-coral to-sky">Story Comes</span> <br />
              to Life! 📚
            </h1>
            
            <p className="max-w-lg mx-auto mb-8 text-lg text-gray-600 lg:mx-0">
              Explore our magical collection of children's books that spark imagination, 
              inspire creativity, and create lasting memories for your little ones.
            </p>
            
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <button 
                onClick={() => setCurrentPage('shop')}
                className="flex items-center justify-center gap-2 btn-fun gradient-sunny group"
              >
                Explore Books
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className="text-black bg-white border-2 border-gray-200 btn-story btn-fun hover:border-sunny"
              >
                Our Story
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-8 mt-12 lg:justify-start">
              <div className="text-center">
                <div className="text-3xl text-orange-500 font-fredoka">10K+</div>
                <div className="text-sm text-gray-500">Happy Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-fredoka text-sky">5K+</div>
                <div className="text-sm text-gray-500">Book Titles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-fredoka text-coral">4.9</div>
                <div className="text-sm text-gray-500">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="relative w-full max-w-lg mx-auto aspect-square">
                {/* Main Circle Background */}
                <div className="absolute inset-0 gradient-sunny blob-shape opacity-90" />
                
                {/* Book Stack Illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Book 1 */}
                    <div className="absolute top-0 w-48 transform border-l-4 rounded-l-sm shadow-2xl h-60 bg-gradient-to-br from-coral to-coral-dark rounded-r-2xl -rotate-12 -left-20 border-white/30">
                      <div className="p-4 text-white">
                        <div className="w-8 h-8 mb-2 rounded-full bg-white/20" />
                        <div className="w-3/4 h-2 mb-2 rounded bg-white/30" />
                        <div className="w-1/2 h-2 rounded bg-white/20" />
                      </div>
                    </div>
                    {/* Book 2 */}
                    <div className="absolute z-10 w-48 transform border-l-4 rounded-l-sm shadow-2xl h-60 bg-gradient-to-br from-sky to-sky-dark rounded-r-2xl rotate-6 left-10 -top-8 border-white/30">
                      <div className="p-4 text-white">
                        <div className="w-8 h-8 mb-2 rounded-full bg-white/20" />
                        <div className="w-3/4 h-2 mb-2 rounded bg-white/30" />
                        <div className="w-1/2 h-2 rounded bg-white/20" />
                      </div>
                    </div>
                    {/* Book 3 */}
                    <div className="absolute z-20 w-48 transform border-l-4 rounded-l-sm shadow-2xl h-60 bg-gradient-to-br from-mint to-mint-dark rounded-r-2xl -rotate-6 -left-5 top-16 border-white/30">
                      <div className="p-4 text-white">
                        <div className="w-8 h-8 mb-2 rounded-full bg-white/20" />
                        <div className="w-3/4 h-2 mb-2 rounded bg-white/30" />
                        <div className="w-1/2 h-2 rounded bg-white/20" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute p-3 bg-white -top-4 right-10 rounded-2xl shadow-fun animate-bounce-gentle">
                  <span className="text-3xl">🦄</span>
                </div>
                <div className="absolute p-3 bg-white bottom-10 -left-4 rounded-2xl shadow-fun animate-wiggle">
                  <span className="text-3xl">🚀</span>
                </div>
                <div className="absolute p-3 bg-white top-1/2 -right-4 rounded-2xl shadow-fun animate-float">
                  <span className="text-3xl">🌈</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Featured Books Section
function FeaturedBooks({ addToCart }: { addToCart: () => void }) {
  const books = [
    { id: 1, title: 'The Magic Forest', author: 'Emma Sparkle', price: 12.99, rating: 4.8, image: '🌲', color: 'from-mint to-mint-dark', category: 'Adventure' },
    { id: 2, title: 'Dragon\'s Dream', author: 'Max Adventure', price: 14.99, rating: 4.9, image: '🐉', color: 'from-coral to-coral-dark', category: 'Fantasy' },
    { id: 3, title: 'Space Explorer', author: 'Luna Star', price: 11.99, rating: 4.7, image: '🚀', color: 'from-sky to-sky-dark', category: 'Sci-Fi' },
    { id: 4, title: 'Rainbow Friends', author: 'Sunny Day', price: 9.99, rating: 4.6, image: '🌈', color: 'from-lavender to-purple', category: 'Friendship' },
  ];

  return (
    <section className="relative py-20">
      <div className="px-4 mx-auto" style={{width: 'min(1320px, 100% - 2.5rem)'}}>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-coral/10">
            <Star className="w-5 h-5 text-coral" />
            <span className="text-sm font-bold text-coral">Bestsellers</span>
          </div>
          <h2 className="mb-4 text-4xl text-gray-800 font-fredoka md:text-5xl">
            Featured Books ⭐
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Handpicked favorites that kids absolutely love! Each book is a gateway to a new adventure.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book, index) => (
            <div 
              key={book.id}
              className="overflow-hidden bg-white fun-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Book Cover */}
              <div className={`h-48 bg-gradient-to-br ${book.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="transition-transform duration-500 transform text-8xl group-hover:scale-110">{book.image}</span>
                </div>
                <button className="absolute flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full top-3 right-3 bg-white/90 text-coral hover:bg-coral hover:text-white">
                  <Heart className="w-5 h-5" />
                </button>
                <Badge className="absolute text-gray-700 bottom-3 left-3 bg-white/90">
                  {book.category}
                </Badge>
              </div>
              
              {/* Book Info */}
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-sunny fill-sunny" />
                  <span className="text-sm font-bold text-gray-700">{book.rating}</span>
                </div>
                <h3 className="mb-1 text-xl text-gray-800 font-fredoka">{book.title}</h3>
                <p className="mb-3 text-sm text-gray-500">by {book.author}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl text-orange-500 font-fredoka">${book.price}</span>
                  <button 
                    onClick={addToCart}
                    className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full bg-sunny hover:bg-orange-500 shadow-card"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Categories Section
function CategoriesSection({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  const categories = [
    { id: 'adventure', name: 'Adventure', icon: '🗺️', color: 'from-mint to-mint-dark', count: 125 },
    { id: 'fantasy', name: 'Fantasy', icon: '🦄', color: 'from-lavender to-purple', count: 98 },
    { id: 'animals', name: 'Animals', icon: '🦁', color: 'from-sunny to-orange', count: 156 },
    { id: 'learning', name: 'Learning', icon: '📖', color: 'from-sky to-sky-dark', count: 87 },
    { id: 'bedtime', name: 'Bedtime', icon: '🌙', color: 'from-coral to-coral-dark', count: 64 },
    { id: 'family', name: 'Family', icon: '👨‍👩‍👧', color: 'from-pink-400 to-pink-600', count: 72 },
  ];

  return (
    <section className="relative py-20">
      {/* Background Wave */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky/5 to-transparent" />
      
      <div className="relative px-4 mx-auto" style={{width: 'min(1320px, 100% - 2.5rem)'}}>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-sky/10">
            <BookOpen className="w-5 h-5 text-sky" />
            <span className="text-sm font-bold text-sky">Categories</span>
          </div>
          <h2 className="mb-4 text-4xl text-gray-800 font-fredoka md:text-5xl">
            Explore by Topic 🔍
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Find the perfect story for every interest and age group!
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => setCurrentPage('shop')}
              className="relative p-6 overflow-hidden text-left bg-white fun-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cat.color} opacity-10 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150`} />
              <div className="relative flex items-center gap-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${cat.color} rounded-2xl flex items-center justify-center text-3xl shadow-card group-hover:shadow-card-hover transition-all group-hover:rotate-6`}>
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-xl text-gray-800 font-fredoka">{cat.name}</h3>
                  <p className="text-sm text-gray-500">{cat.count} books</p>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto text-gray-400 transition-all group-hover:text-orange-500 group-hover:translate-x-2" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    { icon: Truck, title: 'Free Shipping', desc: 'On orders over $30', color: 'from-mint to-mint-dark' },
    { icon: Gift, title: 'Gift Wrapping', desc: 'Beautiful packaging', color: 'from-coral to-coral-dark' },
    { icon: Star, title: 'Curated Selection', desc: 'Only the best books', color: 'from-sunny to-orange' },
    { icon: Heart, title: 'Made with Love', desc: 'For little readers', color: 'from-lavender to-purple' },
  ];

  return (
    <section className="py-20">
      <div className="px-4 mx-auto" style={{width: 'min(1320px, 100% - 2.5rem)'}}>
        <div className="p-8 bg-white rounded-4xl shadow-fun-lg md:p-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white shadow-card group-hover:shadow-card-hover transition-all group-hover:-translate-y-2 mb-4`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="mb-1 text-lg text-gray-800 font-fredoka">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Newsletter Section
function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('🎉 Welcome to the Tiny Tales family! Check your email for a surprise!');
      setEmail('');
    }
  };

  return (
    <section className="py-20">
      <div className="px-4 mx-auto" style={{width: 'min(1320px, 100% - 2.5rem)'}}>
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 gradient-lavender rounded-4xl" />
          <div className="absolute inset-0 pattern-dots opacity-30" />
          
          {/* Floating Decorations */}
          <div className="absolute text-4xl top-10 left-10 animate-float">📚</div>
          <div className="absolute text-4xl bottom-10 right-10 animate-float-delayed">✨</div>
          <div className="absolute text-3xl top-1/2 right-20 animate-wiggle">🌟</div>
          
          <div className="relative z-10 px-8 py-16 text-center md:px-16">
            <h2 className="mb-4 text-3xl text-white font-fredoka md:text-4xl">
              Join Our Story Club! 📬
            </h2>
            <p className="max-w-xl mx-auto mb-8 text-white/80">
              Get weekly book recommendations, exclusive discounts, and fun activities for your little ones!
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col max-w-lg gap-4 mx-auto sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 text-gray-700 border-0 rounded-full h-14 shadow-fun"
              />
              <Button 
                type="submit"
                className="px-8 font-bold text-purple-600 transition-all bg-white rounded-full h-14 hover:bg-sunny hover:text-white shadow-card"
              >
                Subscribe
              </Button>
            </form>
            
            <p className="mt-4 text-sm text-white/60">
              No spam, just stories! Unsubscribe anytime. 🔒
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Shop Page
function ShopPage({ addToCart }: { addToCart: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Books', icon: '📚' },
    { id: 'adventure', name: 'Adventure', icon: '🗺️' },
    { id: 'fantasy', name: 'Fantasy', icon: '🦄' },
    { id: 'animals', name: 'Animals', icon: '🦁' },
    { id: 'learning', name: 'Learning', icon: '📖' },
    { id: 'bedtime', name: 'Bedtime', icon: '🌙' },
  ];

  const allBooks = [
    { id: 1, title: 'The Magic Forest', author: 'Emma Sparkle', price: 12.99, rating: 4.8, image: '🌲', color: 'from-mint to-mint-dark', category: 'adventure' },
    { id: 2, title: 'Dragon\'s Dream', author: 'Max Adventure', price: 14.99, rating: 4.9, image: '🐉', color: 'from-coral to-coral-dark', category: 'fantasy' },
    { id: 3, title: 'Space Explorer', author: 'Luna Star', price: 11.99, rating: 4.7, image: '🚀', color: 'from-sky to-sky-dark', category: 'adventure' },
    { id: 4, title: 'Rainbow Friends', author: 'Sunny Day', price: 9.99, rating: 4.6, image: '🌈', color: 'from-lavender to-purple', category: 'fantasy' },
    { id: 5, title: 'Little Lion\'s Roar', author: 'Zoe Wild', price: 10.99, rating: 4.5, image: '🦁', color: 'from-sunny to-orange', category: 'animals' },
    { id: 6, title: 'ABC Adventure', author: 'Professor Play', price: 8.99, rating: 4.8, image: '🔤', color: 'from-sky to-sky-dark', category: 'learning' },
    { id: 7, title: 'Moonlight Lullaby', author: 'Dreamy Dee', price: 11.99, rating: 4.7, image: '🌙', color: 'from-coral to-coral-dark', category: 'bedtime' },
    { id: 8, title: 'Puppy\'s First Day', author: 'Barkley Brown', price: 9.99, rating: 4.4, image: '🐕', color: 'from-mint to-mint-dark', category: 'animals' },
  ];

  const filteredBooks = allBooks.filter(book => {
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20">
      <div className="px-4 mx-auto" style={{width: 'min(1320px, 100% - 2.5rem)'}}>
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl text-gray-800 font-fredoka md:text-5xl">
            Our Book Collection 📚
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Discover hundreds of magical stories waiting to be explored!
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col justify-center gap-4 mb-8 md:flex-row">
          <div className="relative flex-1 max-w-md mx-auto border border-black border-solid rounded-lg md:mx-0">
            <Search className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-4 top-1/2" />
            <Input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 pl-12 border-2 border-gray-100 rounded-full focus:border-sunny"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'gradient-sunny text-white shadow-card'
                  : 'bg-white text-gray-700 shadow-fun hover:bg-sunny/20'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredBooks.map((book, index) => (
            <div 
              key={book.id}
              className="overflow-hidden bg-white fun-card group animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${book.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="transition-transform duration-500 transform text-8xl group-hover:scale-110">{book.image}</span>
                </div>
                <button className="absolute flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full top-3 right-3 bg-white/90 text-coral hover:bg-coral hover:text-white">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-sunny fill-sunny" />
                  <span className="text-sm font-bold text-gray-700">{book.rating}</span>
                </div>
                <h3 className="mb-1 text-xl text-gray-800 font-fredoka">{book.title}</h3>
                <p className="mb-3 text-sm text-gray-500">by {book.author}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl text-orange-500 font-fredoka">${book.price}</span>
                  <button 
                    onClick={addToCart}
                    className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full bg-sunny hover:bg-orange-500 shadow-card"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="py-16 text-center">
            <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full">
              <Search className="w-12 h-12 text-gray-300" />
            </div>
            <h3 className="text-xl text-gray-600 font-fredoka">No books found</h3>
            <p className="text-gray-400">Try a different search or category!</p>
          </div>
        )}
      </div>
    </div>
  );
}

// About Page
function AboutPage() {
  const team = [
    { name: 'Sarah Story', role: 'Founder', emoji: '👩‍💼', color: 'from-coral to-coral-dark' },
    { name: 'Tom Tales', role: 'Book Curator', emoji: '👨‍🏫', color: 'from-sky to-sky-dark' },
    { name: 'Lily Magic', role: 'Illustrator', emoji: '👩‍🎨', color: 'from-lavender to-purple' },
    { name: 'Max Fun', role: 'Storyteller', emoji: '🎭', color: 'from-mint to-mint-dark' },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="px-4 mx-auto" style={{width: 'min(1320px, 100% - 2.5rem)'}}>
        {/* Hero */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-sunny/10">
            <Sparkles className="w-5 h-5 text-sunny" />
            <span className="text-sm font-bold text-sunny">Our Story</span>
          </div>
          <h1 className="mb-4 text-4xl text-gray-800 font-fredoka md:text-5xl">
            The Tiny Tales Journey 🌟
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            We're on a mission to bring the magic of reading to every child!
          </p>
        </div>

        {/* Story Section */}
        <div className="grid items-center gap-12 mb-20 md:grid-cols-2">
          <div className="relative">
            <div className="w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 gradient-coral blob-shape opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-9xl">📖</span>
              </div>
              <div className="absolute p-4 bg-white -top-4 -right-4 rounded-2xl shadow-fun animate-float">
                <span className="text-4xl">💫</span>
              </div>
              <div className="absolute p-4 bg-white -bottom-4 -left-4 rounded-2xl shadow-fun animate-float-delayed">
                <span className="text-4xl">❤️</span>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="mb-4 text-3xl text-gray-800 font-fredoka">
              Where It All Began
            </h2>
            <p className="mb-4 text-gray-600">
              Tiny Tales started in 2020 with a simple dream: to make reading magical for every child. 
              What began as a small corner bookstore has grown into a beloved online destination for 
              families around the world.
            </p>
            <p className="mb-6 text-gray-600">
              We believe that every book is a portal to adventure, a friend in lonely times, and a 
              teacher of life's greatest lessons. Our carefully curated collection features stories 
              that inspire, educate, and entertain.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 text-center bg-white rounded-2xl shadow-fun">
                <div className="text-2xl text-orange-500 font-fredoka">2020</div>
                <div className="text-xs text-gray-500">Founded</div>
              </div>
              <div className="p-4 text-center bg-white rounded-2xl shadow-fun">
                <div className="text-2xl font-fredoka text-sky">50K+</div>
                <div className="text-xs text-gray-500">Books Sold</div>
              </div>
              <div className="p-4 text-center bg-white rounded-2xl shadow-fun">
                <div className="text-2xl font-fredoka text-coral">100+</div>
                <div className="text-xs text-gray-500">Authors</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="p-8 mb-20 bg-white rounded-4xl shadow-fun-lg md:p-12">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl text-gray-800 font-fredoka">Our Mission 🎯</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl bg-gradient-to-br from-sunny to-orange rounded-2xl shadow-card">
                📚
              </div>
              <h3 className="mb-2 text-lg text-gray-800 font-fredoka">Inspire Reading</h3>
              <p className="text-sm text-gray-500">Make books accessible and exciting for every child</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl bg-gradient-to-br from-mint to-mint-dark rounded-2xl shadow-card">
                🌱
              </div>
              <h3 className="mb-2 text-lg text-gray-800 font-fredoka">Nurture Growth</h3>
              <p className="text-sm text-gray-500">Stories that teach valuable life lessons</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl bg-gradient-to-br from-coral to-coral-dark rounded-2xl shadow-card">
                🌍
              </div>
              <h3 className="mb-2 text-lg text-gray-800 font-fredoka">Build Community</h3>
              <p className="text-sm text-gray-500">Connect families through shared stories</p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <h2 className="mb-8 text-3xl text-gray-800 font-fredoka">Meet Our Team 👥</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div key={index} className="p-6 bg-white fun-card">
                <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-4xl mb-4 shadow-card`}>
                  {member.emoji}
                </div>
                <h3 className="text-lg text-gray-800 font-fredoka">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Contact Page
function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('🎉 Message sent! We\'ll get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-24 pb-20">
      <div className="px-4 mx-auto" style={{width: 'min(1320px, 100% - 2.5rem)'}}>
        {/* Page Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-coral/10">
            <Mail className="w-5 h-5 text-coral" />
            <span className="text-sm font-bold text-coral">Get in Touch</span>
          </div>
          <h1 className="mb-4 text-4xl text-gray-800 font-fredoka md:text-5xl">
            Contact Us 💌
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            We'd love to hear from you! Reach out for any questions or just to say hello!
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="p-8 bg-white rounded-4xl shadow-fun-lg">
            <h2 className="mb-6 text-2xl text-gray-800 font-fredoka">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-bold text-gray-700">Your Name</label>
                <Input
                  type="text"
                  placeholder="Enter your name..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 border-2 border-gray-100 rounded-xl focus:border-sunny"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-bold text-gray-700">Email Address</label>
                <Input
                  type="email"
                  placeholder="Enter your email..."
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 border-2 border-gray-100 rounded-xl focus:border-sunny"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-bold text-gray-700">Message</label>
                <textarea
                  placeholder="Tell us something..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full h-32 p-4 border-2 border-gray-100 resize-none rounded-xl focus:border-sunny focus:outline-none"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="w-full h-12 font-bold text-white transition-all gradient-sunny rounded-xl shadow-card hover:shadow-card-hover"
              >
                Send Message 🚀
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-6 bg-white rounded-3xl shadow-fun">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-sunny/20 rounded-xl text-sunny">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="mb-1 text-lg text-gray-800 font-fredoka">Visit Us</h3>
                <p className="text-sm text-gray-500">123 Story Lane<br />Bookville, BK 12345</p>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-fun">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-mint/20 rounded-xl text-mint">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="mb-1 text-lg text-gray-800 font-fredoka">Call Us</h3>
                <p className="text-sm text-gray-500">+1 (555) 123-4567<br />Mon-Fri, 9am-6pm</p>
              </div>
            </div>

            {/* Map */}
            <div className="p-4 bg-white rounded-4xl shadow-fun-lg">
              <div className="relative flex items-center justify-center h-64 overflow-hidden bg-gradient-to-br from-sky/20 to-mint/20 rounded-3xl">
                {/* Decorative Map Elements */}
                <div className="absolute inset-0 opacity-50 pattern-dots" />
                <div className="relative z-10 text-center">
                  <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 text-4xl rounded-full bg-coral shadow-card animate-bounce-gentle">
                    📍
                  </div>
                  <h3 className="text-xl text-gray-800 font-fredoka">Tiny Tales Store</h3>
                  <p className="text-gray-500">123 Story Lane, Bookville</p>
                </div>
                {/* Road Lines */}
                <div className="absolute left-0 right-0 h-2 top-1/2 bg-white/50" />
                <div className="absolute top-0 bottom-0 w-2 left-1/3 bg-white/50" />
                {/* Buildings */}
                <div className="absolute w-8 h-12 rounded top-10 left-10 bg-sunny/40" />
                <div className="absolute w-10 rounded top-16 right-16 h-14 bg-sky/40" />
                <div className="absolute w-8 h-10 rounded bottom-10 left-1/4 bg-mint/40" />
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 bg-white rounded-3xl shadow-fun">
              <h3 className="mb-4 text-lg text-gray-800 font-fredoka">Follow Our Adventures</h3>
              <div className="flex gap-4">
                <button className="flex items-center justify-center w-12 h-12 transition-all rounded-full bg-sky/10 text-sky hover:bg-sky hover:text-white">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center w-12 h-12 transition-all rounded-full bg-sky/10 text-sky hover:bg-sky hover:text-white">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center w-12 h-12 transition-all rounded-full bg-coral/10 text-coral hover:bg-coral hover:text-white">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center w-12 h-12 transition-all rounded-full bg-coral/10 text-coral hover:bg-coral hover:text-white">
                  <Youtube className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Footer Component
function Footer({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <footer className="bg-white border-t-4 border-sunny/20">
      <div className="px-4 py-12 mx-auto" style={{width: 'min(1320px, 100% - 2.5rem)'}}>
        <div className="grid gap-8 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 gradient-sunny rounded-xl">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl text-gray-800 font-fredoka">
                Tiny<span className="text-orange-500">Tales</span>
              </span>
            </div>
            <p className="mb-4 text-sm text-gray-500">
              Where every story comes to life! Discover magical books for your little ones.
            </p>
            <div className="flex gap-3">
              <button className="flex items-center justify-center w-8 h-8 transition-all rounded-full bg-sky/10 text-sky hover:bg-sky hover:text-white">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 transition-all rounded-full bg-coral/10 text-coral hover:bg-coral hover:text-white">
                <Instagram className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 transition-all rounded-full bg-sky/10 text-sky hover:bg-sky hover:text-white">
                <Twitter className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg text-gray-800 font-fredoka">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => setCurrentPage('home')} className="text-sm text-gray-500 transition-colors hover:text-orange-500">Home</button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('shop')} className="text-sm text-gray-500 transition-colors hover:text-orange-500">Shop Books</button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('about')} className="text-sm text-gray-500 transition-colors hover:text-orange-500">About Us</button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('contact')} className="text-sm text-gray-500 transition-colors hover:text-orange-500">Contact</button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 text-lg text-gray-800 font-fredoka">Categories</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-gray-500">Adventure Stories</span></li>
              <li><span className="text-sm text-gray-500">Fantasy Tales</span></li>
              <li><span className="text-sm text-gray-500">Animal Friends</span></li>
              <li><span className="text-sm text-gray-500">Learning Books</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-lg text-gray-800 font-fredoka">Stay Updated</h4>
            <p className="mb-4 text-sm text-gray-500">Subscribe for new books and special offers!</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="h-10 text-sm rounded-full"
              />
              <Button className="h-10 px-4 text-white rounded-full gradient-sunny">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 border-t border-gray-100 sm:flex-row">
          <p className="text-sm text-gray-400">
            © 2024 Tiny Tales. Made with ❤️ for little readers.
          </p>
          <div className="flex gap-6">
            <button className="text-sm text-gray-400 hover:text-gray-600">Privacy Policy</button>
            <button className="text-sm text-gray-400 hover:text-gray-600">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
    toast.success('🎉 Book added to cart!');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection setCurrentPage={setCurrentPage} />
            <FeaturedBooks addToCart={addToCart} />
            <CategoriesSection setCurrentPage={setCurrentPage} />
            <FeaturesSection />
            <NewsletterSection />
          </>
        );
      case 'shop':
        return <ShopPage addToCart={addToCart} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HeroSection setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} cartCount={cartCount} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
