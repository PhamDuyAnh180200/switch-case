let browser = prompt("Enter your browser")
switch (browser) {
    case 'Edge':
        alert("you've got the Edge!");
        break;
    case 'Chrome':
    case 'Firefox' :
    case 'Safari' :
    case 'Opera' :
        alert('Okay we support these browsers too');
        break;
    default :
        alert('We hope that this page looks ok!');
}