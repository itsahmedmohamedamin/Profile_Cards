const heading = 'Please Meet ME HERE';
let i = 0;

const typing = () => {
    if(i < heading.length) {
        document.querySelector('.heading').innerHTML += heading.charAt(i);
        i++;

        setTimeout(typing, 100);
    }
}

typing();




