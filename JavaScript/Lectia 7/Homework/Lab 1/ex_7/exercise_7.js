let gbAmount = prompt("Enter how amount of space of the flash drive in GB: ")
gbAmount *= 1024 // convert gb to mb
const fileAmount = 820
alert(`For the specified amount of space, you will fit ${Math.floor(gbAmount / fileAmount)} files with the weight of 820 MB`); 