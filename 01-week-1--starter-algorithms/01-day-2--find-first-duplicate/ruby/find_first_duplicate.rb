def find_first_duplicate(arr)
  # type your code in here
  hash_map = Hash.new

  arr.each do |el|
    if hash_map.has_key?(el) 
      return el
    else
      hash_map[el] = 1
    end
  end

  return -1
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 2"
  puts "=>", find_first_duplicate([2, 2])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  puts
  
  puts "Expecting: 4"
  puts "=>", find_first_duplicate([2, 4, 5, 4, 1, 2])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
