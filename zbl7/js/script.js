let index = 0;
function greeting()
{
    let myg = document.querySelector('.myg');
    let grets = ["presents", "présente","يقدم","Представляет","presenta",];
    let colors = ["blue","red"]
    let current_gret = grets[index];
    myg.textContent = current_gret;
    myg.style.color = colors[index % colors.length]; 
    index = (index + 1) % grets.length; 
}

function toggler()
{
    let toggle_btn = document.querySelector('.toggle-menu');
    let links = document.querySelector('.links');
    let link = document.querySelectorAll('.link')
    toggle_btn.onclick = () => {
        links.classList.toggle("open");
        link.forEach(link => {
            link.classList.toggle('open');
        });
    }
}

function close_toggler() 
{
    let links = document.querySelector('.links');
    let link = document.querySelectorAll('.link');
    let elementToExclude = document.getElementById('ls');
    document.addEventListener('click', function(event) {
        if (!links.contains(event.target) && !elementToExclude.contains(event.target)) {
            links.classList.remove("open");
            link.forEach(function(link) {
                link.classList.remove("open");
            });
        }
    });
}

function welcome() 
{
    let body = document.querySelector('.greeting');
    let myn = document.querySelector('.myn')
    let myg = document.querySelector('.myg')
    body.classList.add('welc');
    myn.classList.add('welc');
    setTimeout(function(){
        myn.classList.remove('welc')
        myg.classList.add('welc')
    }, 2500)
    setInterval(greeting,500)
    setTimeout(function() {
        body.classList.remove('welc');
    }, 5000);
}

function scroller()
{
    let el = document.querySelector('.scroller');
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    window.addEventListener("scroll", () => {
        let scrollTop = document.documentElement.scrollTop;
        el.style.width = `${(scrollTop / height) * 100}%`;
    });
    
}

welcome()
scroller()
toggler()
close_toggler()