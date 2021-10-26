import java.util.Arrays;
import java.util.List;

import java.util.stream.Collectors;

public class Lab06 {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(11, 24, 63, 42, 15, 96, 30, 56, 84, 23, 100);

        //1) Print all the numbers
        numbers.forEach(System.out::println);

        //2) Print the sum of all numbers
        int sum = numbers
                    .stream()
                    .reduce((previousValue, currentValue) -> previousValue + currentValue)
                    .get();
        System.out.println("Sum: " + sum);

        //3) Print the first odd number
        int firstOddNumber = numbers
                                .stream()
                                .filter(num -> num % 2 != 0)
                                .findFirst()
                                .get();
        System.out.println("First odd number: " + firstOddNumber);

        //4) Generate an list of squares of all numbers
        List<Integer> squaresLst = numbers
                                        .stream()
                                        .map(e -> e * e)
                                        .collect(Collectors.toList());
        System.out.println(squaresLst);

        //5) Generate a list of numbers divisible by 5. 
        List<Integer> numbersDivBy5 = numbers
                                        .stream()
                                        .filter(it -> it % 5 == 0)
                                        .collect(Collectors.toList());
        System.out.println(numbersDivBy5);

        //6) Print all the even numbers
        numbers
            .stream()
            .filter(it -> it % 2 == 0)
            .forEach(System.out::println);
    }
}