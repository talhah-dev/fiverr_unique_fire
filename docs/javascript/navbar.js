const dynamic_navbar = document.getElementById("navbar");

dynamic_navbar.innerHTML = `
        <nav id="navbar" class="absolute bg-white transition-all duration-500  top-0 left-0 w-full z-40">
            <div class="md:max-w-[85%] mx-auto flex justify-between items-center w-full xl:p-5 p-3 xl:h-[116px] h-24">
                <div class="flex w-full items-center justify-between xl:gap-32 md:gap-20">
                    <a data-aos="fade-right" href="/index.html"
                        class="block text-white text-2xl font-semibold tracking-wide italic">
                       <img src="/docs/assets/images/logo.png" class="xl:h-16 brightness -0 i nvert  h-14" alt="logo"> 
                    </a>
                    <div class="flex items-center gap-3">
                        <div data-aos="fade-left" class="xl:flex items-center gap-10 hidden">
                            <ul id="navbarLinks" class="xl:flex hidden items-center text-zinc-800 gap-10">
                                <li><a href="/index.html"
                                        class="hover:opacity-60 tracking-wide text-nowrap  transition-all duration-500">Home</a>
                                </li>
                                <li><a href="about.html"
                                        class="hover:opacity-60 tracking-wide text-nowrap  transition-all duration-500">About Us</a>
                                </li>
                                <li><a href="/services.html"
                                        class="hover:opacity-60 tracking-wide text-nowrap transition-all duration-500">Services</a>
                                </li>
                                <li><a href="/contact.html"
                                        class="hover:opacity-60 tracking-wide text-nowrap  transition-all duration-500">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="fade-left" class="xl:flex hidden  items-center gap-2">
                        <a href="/contact.html"
                            class="w-full md:w-auto tracking-wider py-2 px-7 bg-[#d1322c] text-center text-white rounded-sm border border-[#d1322c] hover:opacity-70 transition-all duration-500">
                            Get Started
                        </a>
                    </div>
                    <i data-aos="fade-left" id="mobileMenuBtn"
                        class="fa-solid text-zinc-800 fa-bars xl:!hidden text-2xl cursor-pointer mr-2"></i>
                </div>
        </nav>

        <div id="mobileMenu"
            class="fixed left-0 top-0 bg-white w-0 overflow-hidden h-screen z-50 transition-all duration-500">
            <div class="flex items-end justify-end p-5">
                <i class="fa-solid mobileMenuCloseBtn fa-x z-50 text-zinc-800 text-xl cursor-pointer"></i>
            </div>
            <div class="p-6">
                <ul class="flex relative z-50 text-[#1D2939] flex-col gap-7">
                    <li><a href="/index.html"
                            class="hover:opacity-60 mobileMenuCloseBtn tracking-wide  transition-all duration-500 text-nowrap">Home</a>
                    </li>
                    <li><a href="/about.html"
                    class="hover:opacity-60 mobileMenuCloseBtn tracking-wide text-nowrap transition-all duration-500 text-nowrap">About Us</a>
                    </li>
                    <li><a href="/services.html"
                    class="hover:opacity-60 mobileMenuCloseBtn tracking-wide transition-all duration-500 text-nowrap">Services</a>
                    </li>
                    <li><a href="/contact.html"
                            class="hover:opacity-60 mobileMenuCloseBtn tracking-wide  transition-all duration-500 text-nowrap">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="xl:h-24 h-20"></div>
`

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuCloseBtns = document.querySelectorAll(".mobileMenuCloseBtn");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.style.width = "100%";
});

mobileMenuCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        mobileMenu.style.width = "0";
    });
});