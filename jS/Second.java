import java.util.Scanner;


public class Second {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("Enter the Number Rows");
    int NumbOfRows = sc.nextInt();


    System.out.println("Enter the Number Columns");
    int NumbOfColumns = sc.nextInt();

    int [][] Matrix = new int [NumbOfRows][NumbOfColumns];

    System.out.println("Array elements to be entered in row major.");
    for (int i = 0; i < NumbOfRows; i++) {
      for (int j = 0; j < NumbOfColumns; j++) {
            Matrix[i][j] = sc.nextInt();

      }

      System.out.println("The entered matrix is:");
      for (int i = 0; i < numberOfRows; i++) {
          for (int j = 0; j < numberOfColumns; j++) {
              System.out.print(matrix[i][j] + " ");
          }
          System.out.println();
      }
    }

  }
}