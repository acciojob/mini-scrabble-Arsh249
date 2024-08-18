//your code here
document.getElementById('evaluatedText').addEventListener('input', function() {
    const text = this.value; // Get the current value of the textbox
    const letterCount = text.length; // Calculate the length of the text
    document.getElementById('letterCount').textContent = letterCount; // Update the letter count in the h3
});
