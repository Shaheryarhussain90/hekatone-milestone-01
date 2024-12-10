var button = document.getElementById('toggle-skill');
var Skill = document.getElementById('skill');
button.addEventListener('Click', function () {
    if (Skill.style.display === 'none') {
        Skill.style.display = 'block';
    }
    else {
        Skill.style.display = 'none';
    }
});
