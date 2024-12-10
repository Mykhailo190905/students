class Student {
    constructor(name, surname, birthYear, grades = []) {
      this.name = name; 
      this.surname = surname; 
      this.birthYear = birthYear;
      this.grades = grades; 
      this.attendance = new Array(25).fill(null); 
    }
  
    getAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    }
  
    getAverageGrade() {
      if (this.grades.length === 0) return 0;
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      return sum / this.grades.length;
    }
  
    present() {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
        this.attendance[index] = true;
      } else {
        console.log("Массив посещаемости уже заполнен.");
      }
    }
      absent() {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
        this.attendance[index] = false;
      } else {
        console.log("Массив посещаемости уже заполнен.");
      }
    }
      getAverageAttendance() {
      const attendedClasses = this.attendance.filter((item) => item === true).length;
      const totalClasses = this.attendance.filter((item) => item !== null).length;
      return totalClasses > 0 ? attendedClasses / totalClasses : 0;
    }
  
    summary() {
      const averageGrade = this.getAverageGrade();
      const averageAttendance = this.getAverageAttendance();
  
      if (averageGrade > 90 && averageAttendance > 0.9) {
        return "Молодец!";
      } else if (averageGrade > 90 || averageAttendance > 0.9) {
        return "Хорошо, но можно лучше.";
      } else {
        return "Редиска!";
      }
    }
  }
  
  const student1 = new Student("Иван", "Иванов", 2000, [95, 90, 88, 92]);
  const student2 = new Student("Мария", "Петрова", 2001, [85, 87, 89]);
  const student3 = new Student("Алексей", "Сидоров", 1999, [60, 70, 65, 50]);
  student1.present();
  student1.present();
  student1.absent();
  
  student2.present();
  student2.absent();
  student2.present();
  
  student3.absent();
  student3.absent();
  student3.present();
  
  console.log(`${student1.name} - Возраст: ${student1.getAge()}, Средний балл: ${student1.getAverageGrade()}, Итог: ${student1.summary()}`);
  console.log(`${student2.name} - Возраст: ${student2.getAge()}, Средний балл: ${student2.getAverageGrade()}, Итог: ${student2.summary()}`);
  console.log(`${student3.name} - Возраст: ${student3.getAge()}, Средний балл: ${student3.getAverageGrade()}, Итог: ${student3.summary()}`);
  