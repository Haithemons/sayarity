import React, { useState } from 'react';
import {
  Search,
  ShieldCheck,
  PlusCircle,
  MessageSquare,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Filter,
  Car,
  Zap,
  Globe,
  SlidersHorizontal,
  Star,
  ShoppingBag,
  ArrowRight,
  Send,
  Phone,
  HelpCircle,
  Lock,
  User,
  Check
} from 'lucide-react';

export default function App() {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedState, setSelectedState] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  // Sample Algerian States
  const states = [
    "الجزائر العاصمة", "وهران", "قسنطينة", "سطيف", "عنابة", "تلمسان", 
    "باتنة", "بشار", "ورقلة", "سوق أهراس", "تيزي وزو", "شلف", "جميع الولايات (58)"
  ];

  // Car Brands
  const brands = [
    "جميع الماركات", "Renault (رينو)", "Dacia (داسيا)", "Peugeot (بيجو)", 
    "Volkswagen (فولكسفاغن)", "Toyota (تويوتا)", "Hyundai (هيونداي)", "Kia (كيا)", "Audi (أودي)"
  ];

  // Categories
  const categories = [
    { id: 'all', label: 'جميع القطع' },
    { id: 'engine', label: 'المحرك و الملحقات' },
    { id: 'braking', label: 'أنظمة الفرامل' },
    { id: 'suspension', label: 'التعليق والتمتصاص' },
    { id: 'body', label: 'الهيكل والإضاءة' },
    { id: 'wheels', label: 'العجلات والعطور' }
  ];

  // Product List Demo
  const products = [
    {
      id: 1,
      title: "طقم فحمات فرامل أمامي رينو سيمبول / داسيا لوغان (Brembo)",
      category: "braking",
      brand: "Renault / Dacia",
      price: "4,500",
      originalPrice: "5,200",
      state: "16 - الجزائر العاصمة",
      seller: "فولار لقطع الغيار الموثق",
      verified: true,
      rating: 4.9,
      reviewsCount: 38,
      tag: "موافق عليه من الأدمن",
      image: "https://images.unsplash.com/photo-1600706432520-22c9545e7587?auto=format&fit=crop&w=800&q=80",
      specs: "قطع غيار أصلية متوافق مع محرك 1.2 / 1.6 16v مع ضمان سنتين"
    },
    {
      id: 2,
      title: "شاحن توربيني (Turbocharger) جولف 7 GTD / ليون FR 2.0 TDI",
      category: "engine",
      brand: "Volkswagen",
      price: "89,000",
      state: "19 - سطيف",
      seller: "التوربو السريع الجزائر",
      verified: true,
      rating: 5.0,
      reviewsCount: 14,
      tag: "قطعة نادرة نائية",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
      specs: "مستورد من ألمانيا - حالة ممتازة مع ضمان الفحص والتركيب"
    },
    {
      id: 3,
      title: "جنوط سبور ألومنيوم R18 Monoblock Forged (أودي / بيجو)",
      category: "wheels",
      brand: "Audi",
      price: "125,000",
      state: "31 - وهران",
      seller: "الجوهرة للعجلات الفاخرة",
      verified: true,
      rating: 4.8,
      reviewsCount: 52,
      tag: "تخفيض حصري",
      image: "https://images.unsplash.com/photo-1541348263662-e082662d82da?auto=format&fit=crop&w=800&q=80",
      specs: "طقم 4 عجلات بدون خدوش مع حماية أصلية ضد التآكل"
    },
    {
      id: 4,
      title: "مساعدات وممتص صدمات خفي ProSport RS (تويوتا هيلوكس / برادو)",
      category: "suspension",
      brand: "Toyota",
      price: "64,000",
      state: "25 - قسنطينة",
      seller: "المؤسسة الوطنية لقطع الصحراء",
      verified: true,
      rating: 4.9,
      reviewsCount: 29,
      tag: "الأكثر مبيعاً",
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
      specs: "تحمل فائق للطرق الوعرة وضمان الوساطة 100%"
    }
  ];

  const filteredProducts = products.filter(p => {
    if (activeTab !== 'all' && p.category !== activeTab) return false;
    if (searchQuery && !p.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0A0D14] text-slate-100 font-sans dir-rtl" dir="rtl">
      
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-cyan-900/60 via-slate-900 to-cyan-950 border-b border-cyan-500/20 text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-slate-300 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping"></span>
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span><strong>منصة الوسيط الموثوقة:</strong> جميع المعاملات بالدينار الجزائري <strong>(DZD)</strong> مع حماية حفظ الأموال %100</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="hover:text-cyan-400 transition cursor-pointer">مواصفات المعاينة و الدفع عند الاستلام</span>
            <span className="text-slate-600">|</span>
            <span className="hover:text-cyan-400 transition cursor-pointer">مركز الدعم 24/7</span>
          </div>
        </div>
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-[#0A0D14]/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 border border-cyan-400/30">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-white font-mono">سيارتي</span>
                <span className="text-xl font-black text-cyan-400 font-mono">بروكر</span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wider">منصة الوسيط لقطع غيار السيارات بالجزائر</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#hero" className="text-cyan-400 flex items-center gap-1 font-semibold">الرئيسية</a>
            <a href="#parts" className="hover:text-cyan-400 transition">قطع الغيار</a>
            <a href="#sourcing" className="hover:text-cyan-400 transition">طلب توريد خاص</a>
            <a href="#escrow" className="hover:text-cyan-400 transition">الضمان والوساطة</a>
            <a href="#about" className="hover:text-cyan-400 transition">عن المنصة</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700/60 text-slate-200 text-xs font-semibold hover:border-slate-500 transition">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>عربي / DZ</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-lg shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition">
              <PlusCircle className="w-4 h-4" />
              <span>إضافة إعلان جديد</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden py-16 lg:py-24 border-b border-slate-800/50">
        
        {/* Neon Glow Effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full filter blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
                <Zap className="w-3.5 h-3.5" />
                <span>الوسيط رقم #1 في الجزائر لشراء قطع الغيار المضمونة</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                ابحث، قارن، واشترِ <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  قطع غيار سيارتك
                </span> بكل أمان
              </h1>

              <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                نضمن لك حفظ أموالك في حساب الوساطة التجاري حتى تستلم القطعة وتفحصها لدى الميكانيكي. تغطية شاملة لجميع <strong>58 ولاية</strong> مع تجار وموردين موثقين.
              </p>

              {/* Advanced Search Box */}
              <div className="mt-8 p-3 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-3">
                <div className="relative">
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="text"
                    placeholder="ابحث باسم القطعة، المحرك، أو رقم التسلسل (مثال: فحمات فرامل رينو، توربو جولف)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pr-12 pl-4 py-3.5 bg-slate-950/80 rounded-xl border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="bg-slate-950/80 border border-slate-800 text-slate-300 text-xs rounded-xl px-3 py-3 focus:outline-none focus:border-cyan-500 cursor-pointer"
                  >
                    {brands.map((b, idx) => (
                      <option key={idx} value={b}>{b}</option>
                    ))}
                  </select>

                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="bg-slate-950/80 border border-slate-800 text-slate-300 text-xs rounded-xl px-3 py-3 focus:outline-none focus:border-cyan-500 cursor-pointer"
                  >
                    <option value="all">اختر الولاية</option>
                    {states.map((s, idx) => (
                      <option key={idx} value={s}>{s}</option>
                    ))}
                  </select>

                  <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl py-3 flex items-center justify-center gap-2 transition shadow-lg shadow-cyan-500/20">
                    <Search className="w-4 h-4 stroke-[2.5]" />
                    <span>تصفح القطع</span>
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-800/80 text-center sm:text-right">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white font-mono">+120,000</div>
                  <div className="text-xs text-slate-500">قطعة غيار معروضة</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white font-mono">58 ولاية</div>
                  <div className="text-xs text-slate-500">توصيل ومعاينة</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-cyan-400 font-mono">100%</div>
                  <div className="text-xs text-slate-500">ضمان وساطة المعاملات</div>
                </div>
              </div>

            </div>

            {/* Right Hero Visual Feature (Car Component showcase) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 p-2 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80"
                  alt="High performance car spare parts"
                  className="w-full h-[420px] object-cover rounded-2xl filter brightness-90 hover:scale-105 transition duration-700"
                />
                
                {/* Overlay Card Floating */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0A0D14]/90 border border-slate-700/80 backdrop-blur-md shadow-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">قطعة موثقة</span>
                    <h4 className="text-sm font-bold text-white">طقم شاحن توربو الرياضي</h4>
                    <p className="text-xs text-slate-400">ضمان الفحص والتركيب مع وساطة المنصة</p>
                  </div>
                  <div className="text-left">
                    <span className="text-xs text-slate-400">السعر</span>
                    <div className="text-sm font-black text-cyan-400 font-mono">89,000 DZD</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How it Works / Escrow System Process */}
      <section id="escrow" className="py-16 bg-slate-950/60 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">نظام الأمان والوساطة</h2>
            <h3 className="text-2xl sm:text-3xl font-black text-white">كيف تحميك منصة "سيارتي بروكر"؟</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition group">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold font-mono text-lg mb-4 group-hover:bg-cyan-500 group-hover:text-slate-950 transition">
                01
              </div>
              <h4 className="text-base font-bold text-white mb-2">اختر قطعة الغيار</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                تصفح آلاف القطع من التجار الموثوقين وحسب منطقتك والولايات.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition group">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold font-mono text-lg mb-4 group-hover:bg-cyan-500 group-hover:text-slate-950 transition">
                02
              </div>
              <h4 className="text-base font-bold text-white mb-2">إيداع المبلغ بالوساطة</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                يتم تجميد المبلغ بحساب المنصة الآمن بالدينار الجزائري بدون تسليمه للبائع فوراً.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition group">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold font-mono text-lg mb-4 group-hover:bg-cyan-500 group-hover:text-slate-950 transition">
                03
              </div>
              <h4 className="text-base font-bold text-white mb-2">المعاينة والفحص</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                تستلم القطعة وتفحصها لدى خبيرك الميكانيكي وتتأكد من مطابقتها.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition group">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold font-mono text-lg mb-4 group-hover:bg-cyan-500 group-hover:text-slate-950 transition">
                04
              </div>
              <h4 className="text-base font-bold text-white mb-2">تحرير الأموال للبائع</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                بعد موافقتك التامة، يتم تحويل المبلغ للبائع تلقائياً وبكل أمان.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Spare Parts Listings Grid */}
      <section id="parts" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Category Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">المستلزمات الأكثر طلباً</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">أحدث قطع الغيار المتوفرة</h2>
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                    activeTab === cat.id
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image & Badge */}
                  <div className="relative h-48 overflow-hidden bg-slate-950">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-cyan-400 border border-cyan-500/30">
                      {product.tag}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md px-2 py-1 rounded text-[10px] text-slate-300 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      <span>{product.state}</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <span>{product.brand}</span>
                      <span>•</span>
                      <span className="flex items-center text-amber-400">
                        <Star className="w-3 h-3 fill-amber-400 ml-0.5" />
                        {product.rating} ({product.reviewsCount})
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white line-clamp-2 leading-snug group-hover:text-cyan-400 transition">
                      {product.title}
                    </h3>

                    <p className="text-[11px] text-slate-400 line-clamp-2">
                      {product.specs}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      <span className="text-[11px]">البائع: <strong>{product.seller}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Footer / Price & Actions */}
                <div className="p-4 border-t border-slate-800/80 bg-slate-950/40 space-y-3">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block">السعر بالدينار الجزائري</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-black text-cyan-400 font-mono">{product.price}</span>
                        <span className="text-xs font-bold text-slate-300">DZD</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button className="w-full py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition">
                      <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                      <span>مراسلة</span>
                    </button>
                    <button className="w-full py-2 px-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-1 transition shadow-lg shadow-cyan-500/20">
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>شراء بالضمان</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Request Section (طلب توريد خاص) */}
      <section id="sourcing" className="py-16 bg-gradient-to-b from-slate-950 to-[#0A0D14] border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-12 relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-xs font-bold">
                  لم تجد القطعة التي تفتش عنها؟
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white">
                  قدم طلب توريد خاص وسيقوم تجار التشاليح والموردون بتوفيرها لك
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  أدخل مواصفات القطعة المطلوبة مع طراز السيارة وسنتواصل مع أكثر من 500+ مورد موثق عبر مختلف ولايات الوطن للحصول على أفضل العروض والمقترحات.
                </p>

                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="ماركة وطراز السيارة (مثال: Dacia Duster 2021)"
                    className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                  <input
                    type="text"
                    placeholder="اسم القطعة أو رقم القطعة (Part Number)"
                    className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                  <input
                    type="text"
                    placeholder="رقم الهاتف للتواصل"
                    className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs rounded-xl py-3 flex items-center justify-center gap-2 hover:brightness-110 transition shadow-lg shadow-cyan-500/25">
                    <Send className="w-4 h-4" />
                    <span>إرسال طلب التوريد</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full h-64 sm:h-80 rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden relative p-4 flex flex-col justify-center items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-bold text-white">ضمان توفير قطع غيار نادرة</h4>
                  <p className="text-xs text-slate-400 max-w-xs mt-2">
                    نحن نربط المشتري مباشرة بمشبك الموردين والتشاليح المعتمدين مع تطبيق المعاينة قبل السداد.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-12 pb-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-900">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950 font-bold">
                  <Car className="w-5 h-5" />
                </div>
                <span className="text-lg font-black text-white font-mono">سيارتي بروكر</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                المنصة الأولى المعتمدة للوساطة التجارية في قطع غيار السيارات في الجزائر، ضمان وحفظ أموال المشتري والبائع بـ DZD.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white mb-4">روابط سريعة</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="hover:text-cyan-400 transition">جميع قطع الغيار</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">فحص التوريد والتجار</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">شروط الوساطة والضمان</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">الأسئلة الشائعة (FAQ)</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white mb-4">الماركات الشائعة</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="hover:text-cyan-400 transition">قطع غيار رينو (Renault)</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">قطع غيار داسيا (Dacia)</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">قطع غيار بيجو (Peugeot)</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">قطع غيار فولكسفاغن (VW)</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white mb-4">الدعم والتواصل</h4>
              <p className="text-xs text-slate-500 mb-3">فريق خدمة العملاء متواجد للمساعدة على مدار الساعة</p>
              <div className="space-y-2 font-mono text-cyan-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5" />
                  <span>+213 (0) 550 00 00 00</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span>support@sayarati-broker.dz</span>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
            <p>© {new Date().getFullYear()} منصة سيارتي بروكر (Sayarati Broker). جميع الحقوق محفوظة.</p>
            <div className="flex items-center gap-4 text-slate-500">
              <a href="#" className="hover:text-slate-400">سياسة الخصوصية</a>
              <span>•</span>
              <a href="#" className="hover:text-slate-400">شروط الاستخدام</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}