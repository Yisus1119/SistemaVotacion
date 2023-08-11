const candidates: Candidate[] = [
    {
        politicImage: "https://pbs.twimg.com/profile_images/1582783216586563585/7YlzF7RS_400x400.jpg",
        candidateImage: "https://pbs.twimg.com/profile_images/765579093995692034/pQr9wmf-_400x400.jpg",
        name: "Danilo Médina",
        candidatePosition: "Presidente"
    },
];

export function getCandidateModel(candidatePosition: string): Candidate | null {
	return candidates.filter((element) => element.candidatePosition == candidatePosition)[0] ?? null;
}
