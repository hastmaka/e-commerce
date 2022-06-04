module.exports = {
  handleDataToReturn(result) {
    return {success: true, data: result}
  },
  errorHandler(code = 400, message = 'something went wrong', res) {
    res.status(code);
    res.json({
      status: code,
      message: message,
      success: false
    });
  }
}