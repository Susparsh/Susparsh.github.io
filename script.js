window.onscroll = function() {scrolling()};
var ctr = 0;

function scrolling() {
        let ele = document.getElementsByTagName('nav');
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
        ele[0].style.background = "rgb(5, 100, 87)";
        else
        ele[0].style.background = "rgb(3, 24, 63)";
}

function changeActiveClass(tobeActive) {
        let currentActive = document.getElementsByClassName('active');
        let data = [].map.call(currentActive, item => item);
        data[0].className = 'notactive';
        console.log(data[0].className);
        document.getElementById(tobeActive).className = 'active';
        let navbar = document.getElementById('navlist');
        
        if(screen.width <= 952 && navbar.style.left === "0px" ){
                console.log(navbar.style.left)
                navbar.style.left = "-100%";
        }
}
        // let chk  =  document.getElementById('check');
        // let navbar = document.getElementById('navlist');
        // console.log(chk.checked)
        // document.getElementById('check').checked = 'false';
        // chk = document.getElementById('check');
        // console.log(chk.checked);
        // navbar.style.left = "0";

function chkbtn() {
        let navbar = document.getElementById('navlist');
        let chk  =  document.getElementById('check');
        if(screen.width <= 952 && navbar.style.left != -100 ){
                console.log(screen.width)
                navbar.style.left = "0";
        }
//         console.log("Ckbtn")
//         console.log(chk.checked);
//        if(!chk.checked && ctr != 0){
//         navbar.style.left = "0"
//         chk.checked = 'true';
 }