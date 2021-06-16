import formatDistanceToNow from "date-fns/formatDistanceToNow"
import format from "date-fns/format"
// https://date-fns.org/v2.17.0/docs/formatDistanceToNow
export function formatCreatedAt(date) {
    return formatDistanceToNow(new Date(date), {
        addSuffix: true
    });
}

// https://date-fns.org/v2.17.0/docs/format
export function formatDate(timestamp) {
    return format(new Date(timestamp), "MMM do, yyyy")
}

export function formatTime() {}
