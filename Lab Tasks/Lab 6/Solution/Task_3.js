class MovieReviewLeaderboard 
{
    constructor() {
        this.reviewers = []; 
    }

    addReviewer(name) 
    {
        
        let existingReviewer;

        for (let i = 0; i < this.reviewers.length; i++)
        {
            if (this.reviewers[i].name === name)
            {
                existingReviewer = this.reviewers[i];
                break;
            }
        }

        if (existingReviewer) 
        {
            console.log(`Reviewer ${name} already exists.`);
            return;
        }


        const reviewer = { name, ratings: [] }; 

        this.reviewers.push(reviewer);
        
        console.log(`Reviewer ${name} added!!!`);
    }

    updateRating(name, rating) 
    {
        let reviewer;

        for (let i = 0; i < this.reviewers.length; i++) {
            if (this.reviewers[i].name === name) {
                reviewer = this.reviewers[i];
                break;
            }
        }

        this.reviewers.forEach((reviewer) => {
            if (reviewer.name === name) {
                reviewer = reviewer;
            }
        }
        );

        if (!reviewer) {
            console.log(`Reviewer ${name} not found.`);
            return;
        }


        reviewer.ratings.push(rating); 

        console.log(`Updated ${name}. Ratings All: ${reviewer.ratings}`);
    }

    getTopReviewers() {
        if (this.reviewers.length === 0) {
            console.log("No reviewers available.");
            return [];
        }

        const reviewersWithAverage = [];
        
        for (let i = 0; i < this.reviewers.length; i++) 
        {
            const reviewer = this.reviewers[i];
            let totalRatings = 0;
            let numberOfRatings = reviewer.ratings.length;

            for (let j = 0; j < numberOfRatings; j++) 
            {
                totalRatings += reviewer.ratings[j]; 
            }

            const averageRating = numberOfRatings > 0 ? totalRatings / numberOfRatings : 0;

            reviewersWithAverage.push({ name: reviewer.name, averageRating });
        }

        // Sorting now
        for (let i = 0; i < reviewersWithAverage.length; i++) {
            for (let j = i + 1; j < reviewersWithAverage.length; j++) {
                if (reviewersWithAverage[j].averageRating > reviewersWithAverage[i].averageRating) 
                {
                    const temp = reviewersWithAverage[i];
                    reviewersWithAverage[i] = reviewersWithAverage[j];
                    reviewersWithAverage[j] = temp;
                }
            }
        }

        console.log("Top Reviewers:");

        for (let i = 0; i < reviewersWithAverage.length; i++) 
        {
            console.log(`Name: ${reviewersWithAverage[i].name}, Average Rating: ${reviewersWithAverage[i].averageRating.toFixed(2)}`);
        }

        return reviewersWithAverage;
    }
}

const leaderboard = new MovieReviewLeaderboard();

leaderboard.addReviewer('Waqas');
leaderboard.addReviewer('Sami');
leaderboard.addReviewer('Umer');

leaderboard.updateRating('Waqas', 4.5);
leaderboard.updateRating('Waqas', 3.0);
leaderboard.updateRating('Sami', 5.0);
leaderboard.updateRating('Umer', 4.0);
leaderboard.updateRating('Umer', 4.5);
leaderboard.updateRating('Sami', 4.7);

leaderboard.getTopReviewers(); 
