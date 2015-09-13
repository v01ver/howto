import org.apache.camel.Exchange
import org.apache.camel.Processor

class theprocessor implements Processor{

    public void process(Exchange exchange) {
		def headers = exchange.getIn().getHeaders()
		def ctx = exchange.getContext()
		def body = exchange.getIn().getBody()
		body.processor = [:]
		def now = new Date()
		body.processor.utc = now.format("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
		body.processor.state = true
		exchange.getIn().setBody(body)
    }
    public void mock(Exchange exchange) {
		def headers = exchange.getIn().getHeaders()
		def ctx = exchange.getContext()
		def body = exchange.getIn().getBody()
		body.processormock = [:]
		def now = new Date()
		body.processormock.utc = now.format("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
		body.processormock.state = true
		exchange.getIn().setBody(body)
    }
}