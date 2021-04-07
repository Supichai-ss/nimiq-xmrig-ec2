var fs = require("fs");

// Options
var loop = 1000;
var token = "[*|*]";
var namePattern = `V-EC2-${token}.service`;
var totalDigits = 3;
var inputFolder = "./input";
var outputFolder = "./output";
var inputDirs = fs.readdirSync(inputFolder);

// Create output folder
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

// Generate new files from templates
inputDirs.forEach(function (dir) {
  var outputPath = `${outputFolder}/${dir}`;
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  }

  // List templates
  var templates = fs.readdirSync(`${inputFolder}/${dir}`);

  // Create each template output dirs
  templates.forEach(function (template) {
    var newOutputPath = `${outputPath}/${template.replace(".txt", "")}`;
    if (!fs.existsSync(newOutputPath)) {
      fs.mkdirSync(newOutputPath);
    }

    // Read template file
    var templateFileContent = fs.readFileSync(
      `${inputFolder}/${dir}/${template}`,
      "utf8"
    );

    // Generate files
    for (let index = 0; index <= loop; index++) {
      var indexLength = index.toString().length;
      if (indexLength <= 3) {
        var lengthDiff = totalDigits - indexLength;
        var newIndex = "0".repeat(lengthDiff) + index;

        fs.writeFileSync(
          `${newOutputPath}/${namePattern.replace(token, newIndex)}`,
          templateFileContent.replace(token, newIndex)
        );

        // console.log();
        // fs.writeFileSync(
        //   `${newOutputPath}/${namePattern.replace(token, newIndex)}`,
        //   template.replace(token, newIndex)
        // );
      }
    }
  });
});
