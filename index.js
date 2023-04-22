function superbowlWin(record) {
    const newObj = 
    record.find(record => record.result === 'W')
    return !!newObj ? newObj.year
    : undefined
}
