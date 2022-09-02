### Hi, that's my CV
* __Maria Ryabikovskaya__
* __Contacts:__
  + Phone number: 375293077258
  + E-mail: niceshizachan@gmail.com
  + Instagram: @slamrych
* __A few words about me:__
  + _Firstly_, my goal and main priority in life is developing yourself as a specialist in programming, because this field of activity means constant learning and development
  + _Secondly_, my strengths are perseverance and desire to develop (as I said)
* __Skills:__
  + _Programming languages_: C#, Java, SQL
  + _Frameworks:_ ASP.NET MVC
* __Code examples:__
```
  public class Main {

    public static void main(String[] args) {
        // исходный массив
        int [] array = new int[10];
        //количество переприсваиваний
        int countOfAssignments = 0;

        System.out.print("Enter count of experiments: ");
        Scanner sc = new Scanner(System.in);
        int experimentalCount = sc.nextInt();
        int sumOfCountOfAssignments = 0;

        double averageCount;
        double sigma;
        double dispersion;

        double theoreticalAssignmentsCount = 0.0;
        for (var i = 1; i <= 10; i++){
            theoreticalAssignmentsCount += 1.0 / i;
        };

        for (int i = 0; i < 10; i++){

            for(int j = 0; j <= experimentalCount; j++){
                ArrayValidator.FillArray(array); // заполнение массива после каждого испытания
                //получаем количество переприсваиваний
                countOfAssignments = ArrayValidator.FindCountOfAssignments(array);
                sumOfCountOfAssignments += countOfAssignments;
            }

            averageCount = sumOfCountOfAssignments / (double) experimentalCount ;
            sigma = Math.abs(averageCount - theoreticalAssignmentsCount);
            dispersion = sigma * sigma;

            System.out.println(i + ") " + "Среднее количество присваиваний: " + averageCount + " Сигма: " + sigma + " Дисперсия: " + dispersion);
            sumOfCountOfAssignments = 0;
        }
    }
  }

  public class ArrayValidator {

      public static void FillArray(int [] array){
          Random random = new Random();
          for (int i = 0; i < array.length; i++){
              //рандомим от 0 до 200
              array[i] = random.nextInt(200);
          }
      }

      public static int FindCountOfAssignments (int[] array){
          int countOfAssignments = 0;
          int maxValue = array[0];
          countOfAssignments++;

          for (int i = 1; i < array.length; i++){
              if (maxValue < array[i]){
                  maxValue = array[i];
                  countOfAssignments++;
              }
          }
          return countOfAssignments;
      }
  }
```
* __Programming experience:__
  + Link: [Labs_SVChVS](https://github.com/slamry/Labs_SVChVS), language: Markdown
* __English level:__ B1
* __Photo:__

  + ![photo](/lab1/img/1.jpg)
