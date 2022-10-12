export interface IRobotResponse{
    response: Robot[],
}

export interface Robot{
    robotId: number,
    batteryLevel: number,
    x: number,
    y: number,
}