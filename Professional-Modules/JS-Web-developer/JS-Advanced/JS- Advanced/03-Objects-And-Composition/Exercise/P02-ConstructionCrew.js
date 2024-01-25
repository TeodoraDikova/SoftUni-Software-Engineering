function constructionCrew(workerObj) {
    if (workerObj.dizziness) {
        const requiredWater = 0.1 * workerObj.weight * workerObj.experience;
        workerObj.levelOfHydrated += requiredWater;
        workerObj.dizziness = false;
    }
    return workerObj;
}
constructionCrew(
    { weight: 60,
        experience: 5,
        levelOfHydrated: 600,
        dizziness: false });