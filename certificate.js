const certificate = `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUXvt4S/z70UnonHjReS7vgzGwPgkwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvNjk1ZDgwNTEtNjgxNi00YTcyLWEyNmItYjhiY2NiZGJh
MmE0IFByb2plY3QgQ0EwHhcNMjQwNzE1MTcyMTE4WhcNMzQwNzEzMTcyMTE4WjA6
MTgwNgYDVQQDDC82OTVkODA1MS02ODE2LTRhNzItYTI2Yi1iOGJjY2JkYmEyYTQg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAKTqbsgW
X/1hOwIuTZjU7HKTiZOCwlfeuq+BQDlQrJ+P5cNHXvjUWnKaILNBY/+EYT6E3nt0
QUlbgXfnqt+bZv0xGLcfmmKEAaNDbR3CvKHOzpapOD+QigIRczm9Gs7xzU5lLDXT
JhodYyOd5swkzwHdhylgJlcU8kTUWVr7Jz1SWzGqmoYssHuVdWXxKz9vg9BiyJ7G
diApsFMCDjC+ZOY12GrDrtCQsfC18o6A080r13S0kq5xN5mYi6TEuw1dCXyhvPLX
0+2FBtOgcOPHQorBg6vSi9bQk8Gnlr74wd9BL5WdoJRX6nrwuecI7pGIVnFGK1GO
abPanTjnY0Xy0xfx1tXKObw3njlrajlxxzVooonM2liRtsa720D0VKOafwO8AhHZ
0I3WUILhnCLr4fdsrof5fVbd7Emy6TW8VWlkNLYgHExPCJjdrwtHH9Wdk2FG3uxd
1ismjFa+KUqzs0R9Y/ErugFjJvcCvrHSQKoLh0RStt3gOJb2yzovJdA6VQIDAQAB
oz8wPTAdBgNVHQ4EFgQUiByQBpYEoe2qBQOnbY9cHrwz9qkwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAJlHuST73f0Jb215
hG12t7oY8tYX05J1NSrH57obEkph0RCTMr3zPbyX8R/XrWUmrj7uTid+Et5C7Yxu
51WYlDLjEiwZAujnuZiOoq+qnTN7+ay83dgH3T0P/Xwe2j6eZTU/pbjoiYjP/6mM
7v7vUvyXklqKq2BMPQR1HFp34lkxDyss5IiGrfrt0OQWmPBDtjkv/Ncg1gicltBc
BQq0NVeP3BAPO0l9Akpg4PidEu5rZTOnGOGqOyL29vWDt7fjQDyU9MklE4+CJ6Jc
i2oZaCo2q8GWWynKklChDuDwooYdrYHUcmJ3rwdk0KyIWeOoRobKd2tPDGiJ7gag
sDWVt1y/YxXyEzAlwqKbMDeQ0hgVVLuTc40B3Cjtjrl18ySrrUvdAPVN0AD7g9pr
B3KVUrPacpFZXYubiGIn43Vmz8LY5LuCq3QRGFcA1Vxw84VZOwZEA/sxDgDmYPy0
9CV/f/fg0Np5/YOnENag1gXLfbufu+koXLc+zJDW9Ual9C53eg==
-----END CERTIFICATE-----
`;

const buff = Buffer.from(certificate).toString("base64");
console.log(buff);