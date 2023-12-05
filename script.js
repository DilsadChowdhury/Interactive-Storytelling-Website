document.addEventListener('DOMContentLoaded', function () {
    const storyContainer = document.getElementById('story-container');
    const storyTitle = document.getElementById('story-title');
    const storyText = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices-container');

    // Example story data
    const story = {
        title: "The Adventure Begins",
        scenes: [
            {
                text: "You find yourself standing at a crossroad. What path will you choose?",
                choices: [
                    { text: "Go left into the enchanted forest", nextScene: 1 },
                    { text: "Go right towards the mysterious cave", nextScene: 2 }
                ]
            },
            {
                text: "As you enter the forest, you hear magical whispers. Suddenly, a fairy appears.",
                choices: [
                    { text: "Ask the fairy for guidance", nextScene: 3 },
                    { text: "Continue deeper into the forest", nextScene: 4 }
                ]
            },
            {
                text: "The fairy shares a secret map with you. It leads to hidden treasure.",
                choices: [
                    { text: "Follow the map to find the treasure", nextScene: 5 },
                    { text: "Ignore the map and explore on your own", nextScene: 6 }
                ]
            },
            // Add more scenes and choices to continue the story
        ]
    };

    let currentSceneIndex = 0;

    function renderScene() {
        const currentScene = story.scenes[currentSceneIndex];
        storyTitle.textContent = story.title;
        storyText.textContent = currentScene.text;

        // Clear previous choices
        choicesContainer.innerHTML = '';

        // Display choices for the current scene
        currentScene.choices.forEach((choice, index) => {
            const choiceButton = document.createElement('div');
            choiceButton.classList.add('choice-button');
            choiceButton.textContent = choice.text;
            choiceButton.addEventListener('click', () => handleChoice(index));
            choicesContainer.appendChild(choiceButton);
        });
    }

    function handleChoice(choiceIndex) {
        const currentScene = story.scenes[currentSceneIndex];
        const chosenOption = currentScene.choices[choiceIndex];

        // Update the current scene based on the user's choice
        currentSceneIndex = chosenOption.nextScene;

        // Render the new scene
        renderScene();
    }

    // Initial rendering of the first scene
    renderScene();
});
