var friends = ['Johnny', 'Charley', 'Peter Vincent', 'Elena of Avalor', 'The Wiggles'];
var locations = ['living room', 'kitchen', 'garage', 'wine cellar', 'pantry', 'duck stables', 'steam room', 'foyer', 'sun room', 'star gazing room'];
var weapons = ['hammer', 'axe', 'machete', 'tomahawk', 'spirit bomb', 'destructo discs', 'tetsuyga', 'tensega', 'spirit gun', 'rose whip', 'megaduece', 'gundam', 'grenade launcher', 'wind tunnel', 'miasma', 'glock', 'draco', 'double-barrel shotgun', 'zanpakuto', 'gensu knife'];
var textHolder = $('<div id="show">');
$('body').append(textHolder);

accuseNumber();

function accuseNumber() {
    for (var i = 1; i < 101; i++) {
        var h3 = $('<h3></h3>');
        var h3Text = 'Accusation ' + [i];
        h3.append(h3Text);
        textHolder.append(h3);
        console.log(h3Text);
    };

};

$('h3').on('click', function (event) {
    // alert('hey!');
    // var h3 = $('<h3></h3>');
    // var h3Text = 'Accusation ' + [i];
    // h3.append(h3Text);
    // textHolder.append(h3);
    // console.log(h3Text);
    i=0;
    j=0;
    for (var j = 0; i < friends.length;) {
    alert ('Accusation ' + [i] + ': I accuse ' + friends[j] + ', with the ' + weapons[i] + ' in the ' + locations[i] + '!');
    j++;
    };
    // alert(alertText);
});

