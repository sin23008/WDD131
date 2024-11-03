function formatNumber(input) {
    // Remove all non-digit characters
    let value = input.value.replace(/\D/g, '');

    // Add spaces every 4 digits
    const formattedValue = value.replace(/(.{4})/g, '$1 ').trim();

    // Update the input's value
    input.value = formattedValue;
}