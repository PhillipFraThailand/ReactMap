

CREATE TABLE [Markers](
    [Id] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    [userId] TEXT,
    [Title] TEXT NOT NULL,
    [Description] TEXT,
    [Latitude] FLOAT NOT NULL,
    [Longitude] FLOAT NOT NULL,
    [ImageSource] TEXT

);