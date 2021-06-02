module.exports = nextlog;
let tp;

async function nextlog() {
  const fileList = await app.vault.adapter.list("pc-logs");
  console.log("%o", fileList);

  let year = 0, month = 0, day = 0, pretty = '';

  for (let x of fileList.files) {
    let segments = x.replace("pc-logs/").replace('\.md', '').split('-'); // log-1498-08-09 or log-1498-08-09-11

    if (segments[0] == ("log") == 0) {
      let y = parseInt(segments[1]);
      let m = parseInt(segments[2]);
      let d = parseInt(segments[3]);
      if (segments.length == 5 && Number.isInteger(segments[4])) {
        d = parseInt(segments[4]);
      }

      if (y > year) {
        year = y;
        month = m;
        day = d;
      } else if (y == year) {
        if (m > month) {
          month = m;
          day = d;
        } else if (m == month && d > day) {
          day = d;
        }
      }
    }
  }

  if (day == 30) {
    switch (month) {
      // New Year
      case 12:
        year += 1;
        month = 1;
        day = 1;
        break;
      // Special holidays
      case 1:
      case 4:
      case 7:
      case 9:
      case 11:
        month += 1;
        day = 0;
        break;
      // Everything else
      default:
        month += 1;
        day = 1;
    }
  } else {
    day += 1;
  }
  console.log("%s %s %s", year, month, day);

  return [`pc-logs/log-${year}-${pad(month)}-${pad(day)}`,
          `# ${pad(day)} ${monthName(month, day)} ${year}`]
}

function pad(x) {
  if (x < 10) {
    return '0' + x;
  }
  return x;
}

function monthName(m, d) {
  if ( d == 0 ) {
    switch (m) {
      case 2:
        return 'Midwinter';
      case 5:
        return 'Greengrass';
      case 8:
        return 'Midsummer';
      case 10:
        return 'Highharvestide';
      case 12:
        return 'Feast of the Moon';
    }
  }

  switch (m) {
    case 1:
      return 'Hammer';
    case 2:
      return 'Alturiak';
    case 3:
      return 'Ches';
    case 4:
      return 'Tarsakh';
    case 5:
      return 'Mirtul';
    case 6:
      return 'Kythorn';
    case 7:
      return 'Flamerule';
    case 8:
      return 'Elesias';
    case 9:
      return 'Eleint';
    case 10:
      return 'Marpenoth';
    case 11:
      return 'Uktar';
    case 12:
      return 'Nightal';
  }
}