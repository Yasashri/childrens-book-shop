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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-fun py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-12 h-12 gradient-sunny rounded-2xl flex items-center justify-center shadow-card group-hover:shadow-card-hover transition-all duration-300 group-hover:rotate-6">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="font-fredoka text-2xl text-gray-800 hidden sm:block">
              Tiny<span className="text-orange-500">Tales</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
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
            <button className="w-10 h-10 rounded-full bg-white shadow-fun flex items-center justify-center text-gray-600 hover:bg-sunny hover:text-white transition-all duration-300">
              <Search className="w-5 h-5" />
            </button>
            <Sheet>
              <SheetTrigger asChild>
                <button className="w-10 h-10 rounded-full bg-white shadow-fun flex items-center justify-center text-gray-600 hover:bg-coral hover:text-white transition-all duration-300 relative">
                  <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-coral text-white text-xs rounded-full flex items-center justify-center font-bold">
                      {cartCount}
                    </span>
                  )}
                </button>
              </SheetTrigger>
              <SheetContent className="bg-gradient-to-b from-yellow-50 to-orange-50 border-l-4 border-sunny">
                <SheetHeader>
                  <SheetTitle className="font-fredoka text-2xl flex items-center gap-2">
                    <ShoppingCart className="w-6 h-6 text-orange-500" />
                    Your Cart
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 text-center">
                  <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-fun mb-4">
                    <ShoppingCart className="w-12 h-12 text-gray-300" />
                  </div>
                  <p className="text-gray-500 font-medium">Your cart is empty!</p>
                  <p className="text-sm text-gray-400 mt-1">Add some magical books ✨</p>
                  <Button 
                    onClick={() => setCurrentPage('shop')}
                    className="mt-6 gradient-sunny text-white rounded-full px-6"
                  >
                    Browse Books
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full bg-white shadow-fun flex items-center justify-center text-gray-600"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-3xl shadow-fun-lg p-4 animate-slide-up">
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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-sunny/30 blob-shape animate-float" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-coral/30 blob-shape-2 animate-float-delayed" />
      <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-sky/30 blob-shape-3 animate-float" />
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-mint/30 blob-shape animate-float-delayed" />
      
      {/* Floating Stars */}
      <div className="absolute top-32 left-1/3 text-sunny text-4xl animate-bounce-gentle">⭐</div>
      <div className="absolute top-1/3 right-1/4 text-coral text-3xl animate-wiggle">✨</div>
      <div className="absolute bottom-1/3 left-20 text-sky text-3xl animate-bounce-gentle">🌟</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-fun mb-6 animate-slide-in-left">
              <Sparkles className="w-5 h-5 text-sunny" />
              <span className="text-sm font-bold text-gray-700">Discover Magical Stories!</span>
            </div>
            
            <h1 className="font-fredoka text-5xl md:text-6xl lg:text-7xl text-gray-800 leading-tight mb-6">
              Where Every <br />
              <span className="text-transparent bg-clip-text gradient-rainbow bg-gradient-to-r from-sunny via-coral to-sky">Story Comes</span> <br />
              to Life! 📚
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Explore our magical collection of children's books that spark imagination, 
              inspire creativity, and create lasting memories for your little ones.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => setCurrentPage('shop')}
                className="btn-fun gradient-sunny flex items-center justify-center gap-2 group"
              >
                Explore Books
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className="btn-fun bg-white text-gray-700 border-2 border-gray-200 hover:border-sunny"
              >
                Our Story
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center">
                <div className="font-fredoka text-3xl text-orange-500">10K+</div>
                <div className="text-sm text-gray-500">Happy Readers</div>
              </div>
              <div className="text-center">
                <div className="font-fredoka text-3xl text-sky">5K+</div>
                <div className="text-sm text-gray-500">Book Titles</div>
              </div>
              <div className="text-center">
                <div className="font-fredoka text-3xl text-coral">4.9</div>
                <div className="text-sm text-gray-500">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="w-full aspect-square max-w-lg mx-auto relative">
                {/* Main Circle Background */}
                <div className="absolute inset-0 gradient-sunny blob-shape opacity-90" />
                
                {/* Book Stack Illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Book 1 */}
                    <div className="w-48 h-60 bg-gradient-to-br from-coral to-coral-dark rounded-r-2xl rounded-l-sm shadow-2xl transform -rotate-12 absolute -left-20 top-0 border-l-4 border-white/30">
                      <div className="p-4 text-white">
                        <div className="w-8 h-8 bg-white/20 rounded-full mb-2" />
                        <div className="h-2 bg-white/30 rounded w-3/4 mb-2" />
                        <div className="h-2 bg-white/20 rounded w-1/2" />
                      </div>
                    </div>
                    {/* Book 2 */}
                    <div className="w-48 h-60 bg-gradient-to-br from-sky to-sky-dark rounded-r-2xl rounded-l-sm shadow-2xl transform rotate-6 absolute left-10 -top-8 border-l-4 border-white/30 z-10">
                      <div className="p-4 text-white">
                        <div className="w-8 h-8 bg-white/20 rounded-full mb-2" />
                        <div className="h-2 bg-white/30 rounded w-3/4 mb-2" />
                        <div className="h-2 bg-white/20 rounded w-1/2" />
                      </div>
                    </div>
                    {/* Book 3 */}
                    <div className="w-48 h-60 bg-gradient-to-br from-mint to-mint-dark rounded-r-2xl rounded-l-sm shadow-2xl transform -rotate-6 absolute -left-5 top-16 border-l-4 border-white/30 z-20">
                      <div className="p-4 text-white">
                        <div className="w-8 h-8 bg-white/20 rounded-full mb-2" />
                        <div className="h-2 bg-white/30 rounded w-3/4 mb-2" />
                        <div className="h-2 bg-white/20 rounded w-1/2" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 right-10 bg-white rounded-2xl p-3 shadow-fun animate-bounce-gentle">
                  <span className="text-3xl">🦄</span>
                </div>
                <div className="absolute bottom-10 -left-4 bg-white rounded-2xl p-3 shadow-fun animate-wiggle">
                  <span className="text-3xl">🚀</span>
                </div>
                <div className="absolute top-1/2 -right-4 bg-white rounded-2xl p-3 shadow-fun animate-float">
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
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-coral/10 px-4 py-2 rounded-full mb-4">
            <Star className="w-5 h-5 text-coral" />
            <span className="text-sm font-bold text-coral">Bestsellers</span>
          </div>
          <h2 className="font-fredoka text-4xl md:text-5xl text-gray-800 mb-4">
            Featured Books ⭐
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Handpicked favorites that kids absolutely love! Each book is a gateway to a new adventure.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <div 
              key={book.id}
              className="fun-card bg-white overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Book Cover */}
              <div className={`h-48 bg-gradient-to-br ${book.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl transform group-hover:scale-110 transition-transform duration-500">{book.image}</span>
                </div>
                <button className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-coral hover:bg-coral hover:text-white transition-all duration-300">
                  <Heart className="w-5 h-5" />
                </button>
                <Badge className="absolute bottom-3 left-3 bg-white/90 text-gray-700">
                  {book.category}
                </Badge>
              </div>
              
              {/* Book Info */}
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-sunny fill-sunny" />
                  <span className="text-sm font-bold text-gray-700">{book.rating}</span>
                </div>
                <h3 className="font-fredoka text-xl text-gray-800 mb-1">{book.title}</h3>
                <p className="text-sm text-gray-500 mb-3">by {book.author}</p>
                <div className="flex items-center justify-between">
                  <span className="font-fredoka text-2xl text-orange-500">${book.price}</span>
                  <button 
                    onClick={addToCart}
                    className="w-10 h-10 bg-sunny rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors shadow-card"
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
    <section className="py-20 relative">
      {/* Background Wave */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky/10 px-4 py-2 rounded-full mb-4">
            <BookOpen className="w-5 h-5 text-sky" />
            <span className="text-sm font-bold text-sky">Categories</span>
          </div>
          <h2 className="font-fredoka text-4xl md:text-5xl text-gray-800 mb-4">
            Explore by Topic 🔍
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect story for every interest and age group!
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => setCurrentPage('shop')}
              className="fun-card bg-white p-6 text-left group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cat.color} opacity-10 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150`} />
              <div className="flex items-center gap-4 relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${cat.color} rounded-2xl flex items-center justify-center text-3xl shadow-card group-hover:shadow-card-hover transition-all group-hover:rotate-6`}>
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-fredoka text-xl text-gray-800">{cat.name}</h3>
                  <p className="text-sm text-gray-500">{cat.count} books</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-orange-500 group-hover:translate-x-2 transition-all" />
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
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-4xl shadow-fun-lg p-8 md:p-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white shadow-card group-hover:shadow-card-hover transition-all group-hover:-translate-y-2 mb-4`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-fredoka text-lg text-gray-800 mb-1">{feature.title}</h3>
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
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 gradient-lavender rounded-4xl" />
          <div className="absolute inset-0 pattern-dots opacity-30" />
          
          {/* Floating Decorations */}
          <div className="absolute top-10 left-10 text-4xl animate-float">📚</div>
          <div className="absolute bottom-10 right-10 text-4xl animate-float-delayed">✨</div>
          <div className="absolute top-1/2 right-20 text-3xl animate-wiggle">🌟</div>
          
          <div className="relative z-10 py-16 px-8 md:px-16 text-center">
            <h2 className="font-fredoka text-3xl md:text-4xl text-white mb-4">
              Join Our Story Club! 📬
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Get weekly book recommendations, exclusive discounts, and fun activities for your little ones!
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 rounded-full border-0 px-6 text-gray-700 shadow-fun"
              />
              <Button 
                type="submit"
                className="h-14 px-8 rounded-full bg-white text-purple-600 font-bold hover:bg-sunny hover:text-white transition-all shadow-card"
              >
                Subscribe
              </Button>
            </form>
            
            <p className="text-white/60 text-sm mt-4">
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
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-fredoka text-4xl md:text-5xl text-gray-800 mb-4">
            Our Book Collection 📚
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover hundreds of magical stories waiting to be explored!
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md mx-auto md:mx-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 pl-12 rounded-full border-2 border-gray-100 focus:border-sunny"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book, index) => (
            <div 
              key={book.id}
              className="fun-card bg-white overflow-hidden group animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${book.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl transform group-hover:scale-110 transition-transform duration-500">{book.image}</span>
                </div>
                <button className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-coral hover:bg-coral hover:text-white transition-all duration-300">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-sunny fill-sunny" />
                  <span className="text-sm font-bold text-gray-700">{book.rating}</span>
                </div>
                <h3 className="font-fredoka text-xl text-gray-800 mb-1">{book.title}</h3>
                <p className="text-sm text-gray-500 mb-3">by {book.author}</p>
                <div className="flex items-center justify-between">
                  <span className="font-fredoka text-2xl text-orange-500">${book.price}</span>
                  <button 
                    onClick={addToCart}
                    className="w-10 h-10 bg-sunny rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors shadow-card"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Search className="w-12 h-12 text-gray-300" />
            </div>
            <h3 className="font-fredoka text-xl text-gray-600">No books found</h3>
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
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sunny/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-sunny" />
            <span className="text-sm font-bold text-sunny">Our Story</span>
          </div>
          <h1 className="font-fredoka text-4xl md:text-5xl text-gray-800 mb-4">
            The Tiny Tales Journey 🌟
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're on a mission to bring the magic of reading to every child!
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 gradient-coral blob-shape opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-9xl">📖</span>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-fun animate-float">
                <span className="text-4xl">💫</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-fun animate-float-delayed">
                <span className="text-4xl">❤️</span>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="font-fredoka text-3xl text-gray-800 mb-4">
              Where It All Began
            </h2>
            <p className="text-gray-600 mb-4">
              Tiny Tales started in 2020 with a simple dream: to make reading magical for every child. 
              What began as a small corner bookstore has grown into a beloved online destination for 
              families around the world.
            </p>
            <p className="text-gray-600 mb-6">
              We believe that every book is a portal to adventure, a friend in lonely times, and a 
              teacher of life's greatest lessons. Our carefully curated collection features stories 
              that inspire, educate, and entertain.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-2xl shadow-fun">
                <div className="font-fredoka text-2xl text-orange-500">2020</div>
                <div className="text-xs text-gray-500">Founded</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-fun">
                <div className="font-fredoka text-2xl text-sky">50K+</div>
                <div className="text-xs text-gray-500">Books Sold</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-fun">
                <div className="font-fredoka text-2xl text-coral">100+</div>
                <div className="text-xs text-gray-500">Authors</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-4xl shadow-fun-lg p-8 md:p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="font-fredoka text-3xl text-gray-800 mb-4">Our Mission 🎯</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-sunny to-orange rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-card">
                📚
              </div>
              <h3 className="font-fredoka text-lg text-gray-800 mb-2">Inspire Reading</h3>
              <p className="text-sm text-gray-500">Make books accessible and exciting for every child</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-mint to-mint-dark rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-card">
                🌱
              </div>
              <h3 className="font-fredoka text-lg text-gray-800 mb-2">Nurture Growth</h3>
              <p className="text-sm text-gray-500">Stories that teach valuable life lessons</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-coral to-coral-dark rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-card">
                🌍
              </div>
              <h3 className="font-fredoka text-lg text-gray-800 mb-2">Build Community</h3>
              <p className="text-sm text-gray-500">Connect families through shared stories</p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <h2 className="font-fredoka text-3xl text-gray-800 mb-8">Meet Our Team 👥</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="fun-card bg-white p-6">
                <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-4xl mb-4 shadow-card`}>
                  {member.emoji}
                </div>
                <h3 className="font-fredoka text-lg text-gray-800">{member.name}</h3>
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
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-coral/10 px-4 py-2 rounded-full mb-4">
            <Mail className="w-5 h-5 text-coral" />
            <span className="text-sm font-bold text-coral">Get in Touch</span>
          </div>
          <h1 className="font-fredoka text-4xl md:text-5xl text-gray-800 mb-4">
            Contact Us 💌
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out for any questions or just to say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-4xl shadow-fun-lg p-8">
            <h2 className="font-fredoka text-2xl text-gray-800 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                <Input
                  type="text"
                  placeholder="Enter your name..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 rounded-xl border-2 border-gray-100 focus:border-sunny"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <Input
                  type="email"
                  placeholder="Enter your email..."
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 rounded-xl border-2 border-gray-100 focus:border-sunny"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea
                  placeholder="Tell us something..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full h-32 p-4 rounded-xl border-2 border-gray-100 focus:border-sunny focus:outline-none resize-none"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="w-full h-12 gradient-sunny text-white font-bold rounded-xl shadow-card hover:shadow-card-hover transition-all"
              >
                Send Message 🚀
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-3xl p-6 shadow-fun">
                <div className="w-12 h-12 bg-sunny/20 rounded-xl flex items-center justify-center text-sunny mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-fredoka text-lg text-gray-800 mb-1">Visit Us</h3>
                <p className="text-sm text-gray-500">123 Story Lane<br />Bookville, BK 12345</p>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-fun">
                <div className="w-12 h-12 bg-mint/20 rounded-xl flex items-center justify-center text-mint mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-fredoka text-lg text-gray-800 mb-1">Call Us</h3>
                <p className="text-sm text-gray-500">+1 (555) 123-4567<br />Mon-Fri, 9am-6pm</p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-4xl shadow-fun-lg p-4">
              <div className="h-64 bg-gradient-to-br from-sky/20 to-mint/20 rounded-3xl flex items-center justify-center relative overflow-hidden">
                {/* Decorative Map Elements */}
                <div className="absolute inset-0 pattern-dots opacity-50" />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto bg-coral rounded-full flex items-center justify-center text-4xl mb-4 shadow-card animate-bounce-gentle">
                    📍
                  </div>
                  <h3 className="font-fredoka text-xl text-gray-800">Tiny Tales Store</h3>
                  <p className="text-gray-500">123 Story Lane, Bookville</p>
                </div>
                {/* Road Lines */}
                <div className="absolute top-1/2 left-0 right-0 h-2 bg-white/50" />
                <div className="absolute top-0 bottom-0 left-1/3 w-2 bg-white/50" />
                {/* Buildings */}
                <div className="absolute top-10 left-10 w-8 h-12 bg-sunny/40 rounded" />
                <div className="absolute top-16 right-16 w-10 h-14 bg-sky/40 rounded" />
                <div className="absolute bottom-10 left-1/4 w-8 h-10 bg-mint/40 rounded" />
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-3xl p-6 shadow-fun">
              <h3 className="font-fredoka text-lg text-gray-800 mb-4">Follow Our Adventures</h3>
              <div className="flex gap-4">
                <button className="w-12 h-12 bg-sky/10 rounded-full flex items-center justify-center text-sky hover:bg-sky hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 bg-sky/10 rounded-full flex items-center justify-center text-sky hover:bg-sky hover:text-white transition-all">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center text-coral hover:bg-coral hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center text-coral hover:bg-coral hover:text-white transition-all">
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
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 gradient-sunny rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-fredoka text-xl text-gray-800">
                Tiny<span className="text-orange-500">Tales</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-4">
              Where every story comes to life! Discover magical books for your little ones.
            </p>
            <div className="flex gap-3">
              <button className="w-8 h-8 bg-sky/10 rounded-full flex items-center justify-center text-sky hover:bg-sky hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-coral/10 rounded-full flex items-center justify-center text-coral hover:bg-coral hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-sky/10 rounded-full flex items-center justify-center text-sky hover:bg-sky hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-fredoka text-lg text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => setCurrentPage('home')} className="text-gray-500 hover:text-orange-500 transition-colors text-sm">Home</button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('shop')} className="text-gray-500 hover:text-orange-500 transition-colors text-sm">Shop Books</button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('about')} className="text-gray-500 hover:text-orange-500 transition-colors text-sm">About Us</button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('contact')} className="text-gray-500 hover:text-orange-500 transition-colors text-sm">Contact</button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-fredoka text-lg text-gray-800 mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-500 text-sm">Adventure Stories</span></li>
              <li><span className="text-gray-500 text-sm">Fantasy Tales</span></li>
              <li><span className="text-gray-500 text-sm">Animal Friends</span></li>
              <li><span className="text-gray-500 text-sm">Learning Books</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-fredoka text-lg text-gray-800 mb-4">Stay Updated</h4>
            <p className="text-gray-500 text-sm mb-4">Subscribe for new books and special offers!</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="h-10 rounded-full text-sm"
              />
              <Button className="h-10 px-4 rounded-full gradient-sunny text-white">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Tiny Tales. Made with ❤️ for little readers.
          </p>
          <div className="flex gap-6">
            <button className="text-gray-400 hover:text-gray-600 text-sm">Privacy Policy</button>
            <button className="text-gray-400 hover:text-gray-600 text-sm">Terms of Service</button>
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
