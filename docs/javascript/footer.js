const footer = document.getElementById('footer')
footer.innerHTML = `
 <footer
        class="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 p-5 mt-10 mx-auto max-w-7xl p-5">
        <div data-aos="fade-up" class="md:col-span-2 md:pr-16">
            <h2 class="md:text-4xl text-3xl text-zinc-800 font-semibold ">Unique Fire</h2>
            <p class="md:mt-5 mt-3 text-zinc-600">
               Our goal is to protect lives and property by providing reliable, professional, and compliant fire safety solutions.
            </p>
            <div class="mt-7">
               <a href="/contact.html"
                            class="w-full md:w-auto tracking-wider py-2 px-7 bg-[#d1322c] text-center text-white rounded-sm border border-[#d1322c] hover:opacity-70 transition-all duration-500">
                            Get Started
                        </a>
            </div>
        </div>
        
        <div class="md:block hidden"></div>
        <div data-aos="fade-up" data-aos-delay="100" class="second">
            <h2 class="text-2xl text-zinc-800 font-semibold">Quick Link</h2>
            <ul class="mt-5 space-y-3 text-zinc-600 font-medium">
                <li><a href="/index.html">Home</a></li>
                <li><a href="/about.html">About</a></li>
                <li><a href="/services.html">Services</a></li>
                <li><a href="/contact.html">Contact Us</a></li>
            </ul>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" class="second">
            <h2 class="text-2xl text-zinc-800 font-semibold"> Others</h2>
            <ul class="mt-5 space-y-3 text-zinc-600 font-medium">
                <li><a href="/privacy.html">Privacy Policy</a></li>
            </ul>
        </div>

    </footer>

    <p class="text-center p-4 text-zinc-600 mt-5">
        Copyright © <span id="copyright"></span> Unique Fire. All rights reserved.
    </p>
`

const year = new Date().getFullYear()
const copyright = document.getElementById('copyright').innerHTML = year