const apiClient = require('../../configurations/openAiConfig');

async function getCompletion(prompt) {
    console.log("api client: ", Object.keys(apiClient.chat));

    if (!prompt ) {
        throw new Error('All parameters (prompt, question, answer) must have valid values.');
    }

    const completion = await apiClient.chat.completions.create({
        model: "gpt-4",
        messages: [
            {
                "role": "system",
                "content": "You are a helpful assistant."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        max_tokens: 250
    });
    return completion;
}

async function getReportCompletion(array, prompt) {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error('The array parameter must be a non-empty array.');
    }
    if (!prompt) {
        throw new Error('The prompt parameter is required.');
    }

    console.log("arrayyy:", array);

    const descriptions = array?.map(item => {
        return `Question: ${item?.question}, Answer: ${item?.answer}, Technical Assessment: ${item?.technicalAssessment}, Soft Skill Assessment: ${item?.softSkillAssessment}`;
    }).join(" ");

    if (!descriptions || descriptions.length === 0) {
        console.error('Failed to create descriptions from the array.');
        // Return default values if descriptions are missing
        return array.map(QA => ({
            question: QA.question,
            answer: QA.answer,
            technicalScore: 0,
            softSkillScore: 0,
            technicalAssessment: 'Invalid response received from the API.',
            softSkillAssessment: 'Invalid response received from the API.'
        }));
    }

    // console.log('descriptions:', descriptions);

    const arrayAsJsonString = JSON.stringify(array);

    if (!descriptions || descriptions?.length === 0) {
        return 'Failed to create descriptions from the array.';
    }

    console.log("api client: ", Object.keys(apiClient.chat));

    if(descriptions) {
        const completion = await apiClient.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    "role": "system",
                    "content": "You are a helpful assistant."
                },
                {
                    "role": "user",
                    "content": prompt
                },
                {
                    "role": "assistant",
                    "content": descriptions
                }
            ],
            max_tokens: 250
        });
        return completion;
    }
}

async function getVerifiedCompletion(prompt, question, answer) {

    console.log("api client: ", Object.keys(apiClient.chat));
    console.log('prompt:',prompt);
    console.log('question:',question);
    console.log('answer:',answer);
    if (!prompt || !question || !answer) {
        throw new Error('All parameters (prompt, question, answer) must have valid values.');
    }


    const completion = await apiClient.chat.completions.create({
        model: "gpt-4-1106-preview",
        messages: [
            {
                "role": "system",
                "content": "You are a helpful assistant."
            },
            {
                "role": "user",
                "content": question
            },
            {
                "role": "assistant",
                "content": answer
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        max_tokens: 250
    });
    return completion;
}

async function getCodingVerifiedCompletion(prompt) {

    console.log("api client: ", Object.keys(apiClient.chat));
    if (!prompt) {
        throw new Error('prompt must have valid values.');
    }

    const completion = await apiClient.chat.completions.create({
        model: "gpt-4-1106-preview",
        messages: [
            {
                "role": "system",
                "content": "You are a helpful assistant."
            },
            {
                "role": "user",
                "content": prompt
            },

        ],
        max_tokens: 250
    });
    return completion;
}


module.exports = {
    getCompletion,
    getReportCompletion,
    getVerifiedCompletion,
    getCodingVerifiedCompletion
}