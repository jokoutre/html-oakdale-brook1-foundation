$(document).ready(function() {
    // When the play button is clicked
    $('#play-video').click(function() {
        // Retrieve the video file path from the button's data-videoFile attribute
        var videoFile = $(this).attr('data-videoFile');

        // Create a source element for the video
        var source = $('<source>').attr('type', 'video/mp4').attr('src', videoFile);

        // Empty the video player to ensure no previous video is loaded
        var player = $('#videoPlayer');
        player.empty();

        // Append the new source to the video player and load the video
        player.append(source);
        player.get(0).load();

        // Show the modal
        $('#videoModal').modal('show');
    });

    // When the modal is about to be hidden
    $('#videoModal').on('hide.bs.modal', function() {
        // Pause and reset the video player
        var player = $('#videoPlayer').get(0);
        player.pause();
        player.currentTime = 0;

        // Remove the video source to ensure it stops downloading
        $('#videoPlayer').empty();
    });
});
