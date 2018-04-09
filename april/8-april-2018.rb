# Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
# It should remove all values from list a, which are present in list b.
# If a value is present in b, all of its occurrences must be removed from the other

def array_diff(a, b)
  a.inject([]) {|res, x| !b.include?(x) ? res.push(x) : res }
end


# Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).


def average(array)
  (array.inject(0) { |sum, n| sum + n } / array.count.to_f).round
 end

