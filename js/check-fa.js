// Function to test if the FA is an NFA or DFA
function checkAutomatonType(fa) {
    if (!fa.isDFA()) {
        alert(`This automation is NFA`);
    } else {
        alert('The automation is DFA.');
    }
}