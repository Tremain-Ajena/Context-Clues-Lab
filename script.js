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

        (h3).click(accuseClicker(i));
    };

    // var j = friends.length % locations.length % weapons.length;
    
    function accuseClicker(i) {
        return function () {
            var d = i % friends.length;
            var j = i % weapons.length;
            var p = i % locations.length;

            alert(`Accusation ${i}: I accuse ${friends[d]}, with the ${weapons[j]} in the ${locations[p]}!`);

        };

    };

// function accuseClicker() {

//     return $('h3').on('click', function (event) {
//         i = 1
//         // var h3Text = 'Accusation ' + [i];
//         // alert(h3Text + ': I accuse ' + friends[j] + ', with the ' + weapons[d] + ' in the ' + locations[p] + '!');
//         alert(`Accusation ${i}: I accuse ${friends[i % friends.length]}, with the ${weapons[i % weapons.length]} in the ${locations[i % locations.length]}!`);

//         // i++;
//         // j++;
//         // d++;
//         // p++;

//     });
 };

// CREATED A CLOSURE BY PUTTING THIS FUNCTION WITHIN THE FOR LOOP AS A RETURN. I ALSO RESTRUCTURED THE VARIABLES AND THE ALERT A BIT.

