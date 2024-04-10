interface Logger {
    log(message: string): void;
  }
  
  class LogToConsole implements Logger {
    log(message: string): void {
        console.log(message);
    }
  }
  
  class Plotter {
    positionX: number;
    positionY: number;
    isPenDown: boolean;
    color: string;
    logger: Logger;
  
    constructor(logger: Logger) {
        this.positionX = 0;
        this.positionY = 0;
        this.isPenDown = false;
        this.color = "black";
        this.logger = logger;
    }
  
    move(distance: number) {
        this.logger.log(`Перемещение на ${distance} единиц`);
    }
  
    rotateClockwise(degrees: number) {
        this.logger.log(`Поворот на ${degrees} градусов по часовой стрелке`);
    }
  
    rotateCounterClockwise(degrees: number) {
        this.logger.log(`Поворот на ${degrees} градусов против часовой стрелке`);
    }
  
    liftPen() {
        this.logger.log("Поднятие ручки");
        this.isPenDown = false;
    }
  
    lowerPen() {
        this.logger.log("Опускание ручки");
        this.isPenDown = true;
    }
  
    setColor(color: string) {
        this.logger.log(`Цвет: ${color}`);
        this.color = color;
    }
  
    setInitialPosition(x: number, y: number) {
        this.logger.log(`Установка исходного положения на (${x},${y})`);
        this.positionX = x;
        this.positionY = y;
    }
  }