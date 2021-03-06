const storySummaryMock = {
    summary: {
        key: 'o9s0toym',
        title: 'The Cave',
        author: 'Bubba Gumpzzz',
        tagLine: 'You want to read this.',
        about: 'Sometimes life compels you great things.  And sometimes you\'d rather play this game.',
        firstScene: 'ke8jfk0w'
    },
    stats: {
        likes: 42
    }
};

const sceneMock = {
    ke8jfk0w: {
        sceneKey: 'ke8jfk0w',
        title: 'The Cave',
        prose: 'It\'s a nice day, so you decide to go for a walk.  As you stroll along, you see a clearing with an outcrop of rocks.  Something is unusual about these rocks, some blackness unlike the surrounding soil.  You notice that this is an opening to a cave.  It is dark inside, and you wonder how far it goes.',
        signpost: {
            prompt: 'What would you like to do?',
            options: [
                {
                    destination: 'd9wkk92l',
                    teaser: 'Winners choose this path.'
                },
                {
                    destination: 'ii23klod',
                    teaser: 'Losers never win.'
                }
            ]
        }
    },
    d9wkk92l: {
        title: 'You Win!',
        prose: 'You read the signs correctly, so you win.  Doesn\'t that feel great?'
    },
    ii23klod: {
        title: 'You Lose.',
        prose: 'Well that was predictable.'
    }
};

export const getStoryInfo = (storyKey) => {
    console.log('requesting story for key', storyKey);
    return storySummaryMock;
};

export const getScene = (storyKey, sceneKey) => {
    console.log('requesting scene', sceneKey, 'for story', storyKey);
    return sceneMock[sceneKey];
};
