interface Dictionary {
    [topic: string]: {
        [englishWord: string]: string;  
    }  
}

interface NestedDictionary {
    [word: string]: string
}

export const germanDictionary: Dictionary = { 
    'Beziehungen zu Familie und Freunden': {
        'habit': 'die Angewohnheit(-en)',
        'to get annoyed (about)': 'sich ärgern (über)',
        'to discuss': 'besprechen',
        'relationship': 'die Beziehung(-en)',
        'to break up': 'in die Brüche gehen',
        'now and then': 'dann und wann',
        'marriage': 'die Ehe(-n)',
        'jealous': 'eifersüchtig',
        'parent': 'der Enternteil(-e)',
        'tight, close': 'eng',
        'to apologise': 'sich entschuldigen',
        'relaxed': 'entspannt',
        'freedom': 'die Freiheit',
        'circle of friends': 'die Freunddeskreis(-e)',
        'friendship': 'die Freundschaft(-en)',
        'to feel': 'sich fühlen',
        'violin': 'die Geige(-n)',
        'mean': 'gemein',
        'reason': 'der Grund(¨-e)',
        'helpful': 'hilfsbereit',
        'to be interested in': 'sich interessieren für',
        'to take care of, to look after': 'sich kümmern um',
        'to suffer, to stand':  'leiden',
        'solution': 'die Lösund(-en)',
        'with each other, together': 'miteinander',
        'necessary, essential': 'notwendig',
        'quiet, calm': 'ruhig',
        'to worry': 'sich Sorgen machen',
        'constantly': 'ständig',
        'to argue': 'sich streiten',
        'strict': 'streng',
        'to share': 'teilen',
        'unbearable': 'unerträglich',
        'to do, to undertake': 'unternehmen',
        'to spoil': 'verdeben',
        'to rely on': 'sich verlassen auf',
        'to introduce oneself, to imagine': 'sich vorstellen',
        'to turn to': 'sich wenden an',
        'important': 'wichtig',
        'content, happy': 'zufrieden',
        'to admit': 'zugeben',
        'reliable': 'zuverlässig'
    },
    'In meiner Familie': {
        'to get on (with)': 'auskommen (mit)',
        'to look like, to appear': 'aussehen'
    }
}

function switchKeysAndValues(dictionary: Dictionary): Dictionary {
    const swappedDictionary: Dictionary = {};

    for (const topic in dictionary) {
      const topicDictionary = dictionary[topic];
      const swappedTopicDictionary: NestedDictionary = {};

      for (const [key, value] of Object.entries(topicDictionary)) {
        swappedTopicDictionary[value] = key;
      }

      swappedDictionary[topic] = swappedTopicDictionary; 
    }

    return swappedDictionary;
  }

export const inverseGermanDictionary = switchKeysAndValues(germanDictionary);

console.log(inverseGermanDictionary)

export const latinDictionary: Dictionary = {
    '7.2': {
        'I set free': 'libero -are -avi',  
        'I announce, I report': 'nuntio -are -avi',  
        'I die, I perish': 'pereo -ire -ii'  ,
        'I persuade (+dat)': 'persuadeo -ere persuasi',
        'terrified': 'perterritus -a -um',
        'after, when': 'postquam',
        'near': 'prope (+acc)',
        'although': 'quamquam',
        'who, which': 'qui quae quod',
        'who? what?': 'quis? quid?',
        'because': 'quod',
        '...back (prefix for verbs)': 're-',
        'I go back, I come back, I return': 'redeo -ire -ii',
        'I reply': 'respondeo -ere -i',
        'senator': 'senator -oris m',
        'I save, I protect, I keep': 'servo -are -avi',
        'across': 'trans (+acc, or as prefix)',
        '(not question) when where': 'ubi',
        'wife': 'uxor -oris f',
        'I sell': 'vendo -ere -idi',
        'one': 'unus una unum',
        'two': 'duo duae duo',
        'three': 'tres n tria',
        'four': 'quattuor',
        'five': 'quinque',
        'six': 'sex',
        'seven': 'septem',
        'eight': 'octo',
        'nine': 'novem',
        'ten': 'decem',
        'hundred': 'centum',
        'thousand': 'mille pl milia'
    },
    '7.1': {
        'anger': 'ira -ae f'
    }
}