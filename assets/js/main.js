//Level 1.1.1
console.log('Level 1.1')

const adresse = ['Hafenstr. 52', '22113', 'Hammaburg']
const besteste = ['Heat', 'Noah', 'Haks','Nano']
const person = ['Magnus', 'Pool', 'Schmagnus', 32, 'Piracy', 'Loguetown', 'superCode']

console.log('Zeige alle Arrays in der Konsole.')
console.log('Die Adresse: ',adresse)
console.log('Meine Freunde: ',besteste)
console.log('Zu meiner Person: ',person)

console.log('Füge die Arrays adresse und besteste zum Array person hinzu.')
person.push(besteste,adresse)
console.log('Zusammengefasst:',person)



console.log('Gib das Array person in der Konsole aus und versuche auch die jeweiligen Arrays aus der Array person in der Konsole auszugeben.')

console.log(person[7].join(', '))
console.log(person[8].join(', '))



//Level 1.1.2
console.log('Level 1.2')

console.log('this is the arrey length of peron: ', person.length)
console.log('this is the arrey length of besteste: ', besteste.length)
console.log('this is the arrey length of adresse: ', adresse.length)



//Level 1.2
console.log('Level 1.2:', 'Arrays 3 Möglichkeiten')

const meineTrainer1 = ['Eric', 'Steffen', 'Simon', 'Ahmed']
console.log(meineTrainer1)

const meineTrainer2 = new Array("Max", "Steffen", "Simon", "Ahmed")
console.log(meineTrainer2)


const meineTrainer3 = new Array()
meineTrainer3[0] = "Eric"
meineTrainer3[1] = "Steffen"
meineTrainer3[2] = "Simon"
meineTrainer3[3] = "Ahmed"

console.log(meineTrainer3)



//Level 1.3
console.log('Level 1.3:', 'Arrays Index')

const numberArray = [5,6,7,8,9,10]
console.log(numberArray)
console.log(numberArray.length)

console.log(numberArray[4])
console.log(numberArray[0])
console.log(numberArray[5])
console.log(numberArray[2])
console.log(numberArray[3])



//Level 1.4
console.log('Level 1.4:', 'Arrays Splitt()')

const meinText1 = 'Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag.'
const meinText2 = 'Wie geht es dir heute?'
const meinText3 = 'Heute ist ein großer Tag für uns.'

console.log(meinText1)
console.log(meinText2)
console.log(meinText3)

const split1 = meinText1.split()
const split2 = meinText2.split("")
const split3 = meinText3.split(" ")

console.log(split1)
console.log(split2)
console.log(split3)



//Level 1.5.1
console.log('Level 1.5.1:', 'Arrays push()')


const songs = ['Bohemian Rhapsody', 'Stairway to Heaven', 'Hotel California']
songs.push('Mutter')
songs.push('The kids are not alright')
songs.push('Sonne')
const totalSongs = songs

console.log(totalSongs)


console.log('Piraten-Crew')
const kidPirates = ['Eustass Kid', 'Killer', 'Heat', 'Wire', 'Haikei','Oscar']
console.log(kidPirates)

const crewMember = ['Noah', 'Magnus']
crewMember.push('Nano', 'Zeko')
console.log(crewMember)



//Level 1.5.2
console.log('Level 1.5.1:', 'push() arrays in array')

const heroUndEnemy = [['Luke Cage', 'Jessica Jones'],['Deadpool', 'Spider-Man'],['Daredevil', 'Wolverine']]
heroUndEnemy.push(['Deathstroke', 'Teen Titans'],['Master Khan', 'Iron Fist'], ['Jigsaw', 'Punisher'])
console.log(heroUndEnemy)



//Level 1.7
console.log('Level 1.7.1:', 'Arrays unshift()')

const deutscheGerichte = ['Speckkuchen', 'Thüringer Rostbratwurst', 'Quarkkeulchen', 'Sauerbraten']
console.log(deutscheGerichte)

deutscheGerichte.unshift('Erbsensuppe', 'Kartoffelbrei')
console.log(deutscheGerichte)



//Level 1.8
console.log('Level 1.8:', 'Arrays shift()')

const nichtGut = []
nichtGut[0] = deutscheGerichte.shift()
console.log(nichtGut)

nichtGut[1] = deutscheGerichte.shift()
console.log(nichtGut)

nichtGut[2] = deutscheGerichte.shift()
console.log(nichtGut)
console.log(deutscheGerichte)



//Level 1.9
console.log('Level 1.9:', 'Push Pop Shift Unshift Difference')

const zahlen = [23, 54, 75]
console.log(zahlen)
zahlen.push(34, 25, 67, 4, 8)
console.log(zahlen)

zahlen.unshift(34, 5, 7, 12, 99)
console.log(zahlen)

zahlen.pop()
zahlen.pop()
console.log(zahlen)

zahlen.shift()
zahlen.shift()
console.log(zahlen)



//Level 1.9
console.log('Level 1.12:', 'Array slice()')

let array = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];

console.log(array)

const copyImage1 = array.slice(7,15)

console.log(copyImage1)

const copyImage2 = array.slice(6,12)
console.log(copyImage2)