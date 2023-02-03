# Here we are getting our node as Base image
FROM golang:1.19.3-alpine3.17 as base

# Set the Current Working Directory inside the container
WORKDIR /usr/app
COPY go.mod go.sum ./src/server.go .air.toml ./
RUN go mod download && go mod verify

# Build the Go app
RUN CGO_ENABLED=0 go build -ldflags '-extldflags "-static"' -o main_compiled server.go

#ENV NODE_ENV=production
FROM scratch as production
COPY --from=base /usr/app/main_compiled /main_compiled
EXPOSE 4004
ENTRYPOINT ["/main_compiled"]


FROM base as dev
RUN go install github.com/cosmtrek/air@latest
#CMD ["go", "run", "../src/sixth.go"]
CMD ["air", "-c", ".air.toml"]

