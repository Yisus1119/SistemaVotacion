const elections: Election[] = [
    {
        electionName: "ELECCIONES2024",
        countryName: "Repùblica Dominicana",
        startDate: new Date("2024-06-20"),
        endDate: new Date("2024-06-21"),
        candidatesQuantity: 65
    }
];

export function getElectionModel(electionName: string): Election | null {
    return elections.filter((element) => element.electionName == electionName)[0] ?? null;
}