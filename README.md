# Graph Isomorphism

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice." 

Heaviliy based my algorithm on the theory presented in: https://www.youtube.com/watch?v=UCle3Smvh1s&t=266s

https://stackoverflow.com/questions/49799475/generating-permutation-matrices-of-a-2-dimensional-array-in-python

Researched permutation and matrix calculations:
https://www.geeksforgeeks.org/print-all-permutation-of-array-using-javascript/
https://www.geeksforgeeks.org/transpose-a-two-dimensional-2d-array-in-javascript/

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

I want to prefice this with that fact that spent approximately 6 hours on this as I unfortunately mistook the defenition for permutation matrix to be a permutation of all known matrices of size n. I later corrected this problem and have know made a (comparably) efficient algorithm. You won't see much of that work, as it was an over complication of the already present work, but to give you an example, I was attempting to bruteforce 2d arrays, which was incredebly inefficient.

What is the worst-case big $\Theta$ time complexity of your algorithm?
Worst case big $\Theta$ would be big $\Theta(n! * (n + n^2 + 2n^3))$ as in the worst case it performs a comparison (n) on a matrix that has been multiplied twice (2n^3) by a permutation matrix and its transpose (n^2) n! times (number of possible permutation matrices)
